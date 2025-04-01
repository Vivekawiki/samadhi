
// This file provides a mock API interface for development
// In production, these functions would call a Laravel backend

// Mock API service
export const api = {
  auth: {
    register: async (email: string, password: string, userData: { firstName?: string; lastName?: string }) => {
      console.log('Register API call', { email, userData });
      // Mock successful registration
      localStorage.setItem('mockAuthToken', 'mock-token-' + Date.now());
      return { id: 'user-123', email };
    },
    login: async (email: string, password: string) => {
      console.log('Login API call', { email });
      // Mock successful login
      localStorage.setItem('mockAuthToken', 'mock-token-' + Date.now());
      return { id: 'user-123', email };
    },
    logout: async () => {
      localStorage.removeItem('mockAuthToken');
      return { success: true };
    },
    getCurrentUser: async () => {
      const token = localStorage.getItem('mockAuthToken');
      if (!token) return null;
      
      // Return mock user data
      return { id: 'user-123', email: 'user@example.com' };
    }
  },
  profile: {
    get: async (userId: string) => {
      console.log('Get profile API call', { userId });
      // Return mock profile data
      return {
        id: userId,
        first_name: 'John',
        last_name: 'Doe',
        avatar_url: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    },
    update: async (data: { firstName?: string; lastName?: string }) => {
      console.log('Update profile API call', data);
      return { success: true };
    }
  },
  roles: {
    check: async (role: string) => {
      // For development, return true for regular user role
      return role === 'user';
    },
    getAll: async (userId: string) => {
      // Return mock roles
      return ['user'];
    }
  }
};
