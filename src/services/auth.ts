
import { db } from '@/db/sqlite';
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';

// Simple password hashing
const hashPassword = (password: string): string => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
};

const verifyPassword = (password: string, hashedPassword: string): boolean => {
  const [salt, storedHash] = hashedPassword.split(':');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return storedHash === hash;
};

// Generate a simple session token
const generateToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

// In-memory session storage (in a real app, you'd use a proper session store)
const sessions: Record<string, { userId: string; expiresAt: number }> = {};

export const auth = {
  // Register a new user
  async signUp(email: string, password: string, userData: { first_name?: string; last_name?: string }) {
    try {
      const userId = uuidv4();
      const hashedPassword = hashPassword(password);
      
      // Begin transaction
      db.prepare(`INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)`)
        .run(userId, email, hashedPassword);
        
      db.prepare(`INSERT INTO profiles (id, first_name, last_name) VALUES (?, ?, ?)`)
        .run(userId, userData.first_name || null, userData.last_name || null);
        
      db.prepare(`INSERT INTO user_roles (id, user_id, role) VALUES (?, ?, ?)`)
        .run(uuidv4(), userId, 'user');
      
      const token = generateToken();
      sessions[token] = { userId, expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 }; // 7 days
      
      return { user: { id: userId, email }, token };
    } catch (error: any) {
      throw new Error(`Registration failed: ${error.message}`);
    }
  },
  
  // Sign in a user
  async signIn(email: string, password: string) {
    try {
      const user = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
      
      if (!user || !verifyPassword(password, user.password_hash)) {
        throw new Error('Invalid login credentials');
      }
      
      const token = generateToken();
      sessions[token] = { userId: user.id, expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 }; // 7 days
      
      return { user: { id: user.id, email: user.email }, token };
    } catch (error: any) {
      throw new Error(`Login failed: ${error.message}`);
    }
  },
  
  // Get user by token
  async getUserByToken(token: string) {
    try {
      const session = sessions[token];
      
      if (!session || session.expiresAt < Date.now()) {
        return null;
      }
      
      const user = db.prepare(`SELECT id, email FROM users WHERE id = ?`).get(session.userId);
      
      if (!user) {
        return null;
      }
      
      return user;
    } catch (error) {
      return null;
    }
  },
  
  // Sign out a user
  async signOut(token: string) {
    delete sessions[token];
    return { success: true };
  },
  
  // Check if user has a specific role
  async hasRole(userId: string, role: string) {
    try {
      const result = db.prepare(`
        SELECT COUNT(*) as count FROM user_roles 
        WHERE user_id = ? AND role = ?
      `).get(userId, role);
      
      return result.count > 0;
    } catch (error) {
      return false;
    }
  },
};
