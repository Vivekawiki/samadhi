
const API_URL = 'http://localhost:8000/api'; // Update with your Laravel API URL

// Helper function to get the auth token from localStorage
const getToken = () => localStorage.getItem('auth_token');

// Helper to handle common API response errors
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error: ${response.status}`);
  }
  return response.json();
};

// API methods
export const api = {
  // Auth endpoints
  auth: {
    login: async (email: string, password: string) => {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      return handleResponse(response);
    },
    
    register: async (data: { email: string; password: string; password_confirmation: string; first_name?: string; last_name?: string }) => {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    
    logout: async () => {
      const token = getToken();
      if (!token) return;
      
      const response = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    },
    
    getUser: async () => {
      const token = getToken();
      if (!token) throw new Error('No auth token found');
      
      const response = await fetch(`${API_URL}/user`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    },
  },
  
  // User profile endpoints
  profile: {
    update: async (data: { first_name?: string; last_name?: string; avatar_url?: string }) => {
      const token = getToken();
      if (!token) throw new Error('No auth token found');
      
      const response = await fetch(`${API_URL}/profile`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
  },
  
  // Admin endpoints
  admin: {
    getUsers: async () => {
      const token = getToken();
      if (!token) throw new Error('No auth token found');
      
      const response = await fetch(`${API_URL}/admin/users`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    },
    
    updateUserRole: async (userId: string, role: string) => {
      const token = getToken();
      if (!token) throw new Error('No auth token found');
      
      const response = await fetch(`${API_URL}/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role }),
      });
      return handleResponse(response);
    },
  },
};
