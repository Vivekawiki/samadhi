
// Mock authentication service for development
// In production, these functions would call a Laravel backend

// Simple token generation for development
const generateToken = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

// In-memory session storage (only for development)
const sessions: Record<string, { userId: string; expiresAt: number }> = {};

export const auth = {
  // Register a new user
  async signUp(email: string, password: string, userData: { firstName?: string; lastName?: string }) {
    try {
      const userId = `user-${Date.now()}`;
      
      console.log('Mock registration:', { userId, email, userData });
      
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
      console.log('Mock sign in:', { email });
      
      const userId = `user-${Date.now()}`; // In a real app, we would validate credentials
      
      const token = generateToken();
      sessions[token] = { userId, expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 }; // 7 days
      
      return { user: { id: userId, email }, token };
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
      
      // Return mock user
      return { id: session.userId, email: 'user@example.com' };
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
    // For development, assume regular users only
    return role === 'user';
  },
};
