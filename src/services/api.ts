
import { auth } from './auth';
import { db } from '@/db/sqlite';

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem('authToken');
};

// API service
export const api = {
  auth: {
    register: async (email: string, password: string, userData: { firstName?: string; lastName?: string }) => {
      const result = await auth.signUp(email, password, userData);
      localStorage.setItem('authToken', result.token);
      return result.user;
    },
    login: async (email: string, password: string) => {
      const result = await auth.signIn(email, password);
      localStorage.setItem('authToken', result.token);
      return result.user;
    },
    logout: async () => {
      const token = getToken();
      if (token) {
        await auth.signOut(token);
        localStorage.removeItem('authToken');
      }
      return { success: true };
    },
    getCurrentUser: async () => {
      const token = getToken();
      if (!token) return null;
      
      return await auth.getUserByToken(token);
    }
  },
  profile: {
    get: async (userId: string) => {
      return db.prepare(`SELECT * FROM profiles WHERE id = ?`).get(userId);
    },
    update: async (data: { firstName?: string; lastName?: string }) => {
      const token = getToken();
      if (!token) throw new Error('Not authenticated');
      
      const user = await auth.getUserByToken(token);
      if (!user) throw new Error('User not found');
      
      const { firstName, lastName } = data;
      
      db.prepare(`
        UPDATE profiles 
        SET first_name = COALESCE(?, first_name), 
            last_name = COALESCE(?, last_name),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `).run(firstName, lastName, user.id);
      
      return { success: true };
    }
  },
  roles: {
    check: async (role: string) => {
      const token = getToken();
      if (!token) return false;
      
      const user = await auth.getUserByToken(token);
      if (!user) return false;
      
      return await auth.hasRole(user.id, role);
    },
    getAll: async (userId: string) => {
      return db.prepare(`
        SELECT role FROM user_roles WHERE user_id = ?
      `).all(userId).map(row => row.role);
    }
  }
};
