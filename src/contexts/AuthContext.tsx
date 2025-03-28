
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

// Define the User type to match what will come from the Laravel API
type User = {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
};

type Profile = {
  id: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
};

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  signUp: (email: string, password: string, metadata?: { first_name?: string; last_name?: string }) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  isModerator: boolean;
};

const API_URL = 'http://localhost:8000/api'; // Update with your Laravel API URL

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModerator, setIsModerator] = useState(false);
  const { toast } = useToast();

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);
      try {
        // Get the token from localStorage
        const token = localStorage.getItem('auth_token');
        
        if (!token) {
          setIsLoading(false);
          return;
        }
        
        // Verify the token with the API
        const response = await fetch(`${API_URL}/user`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData.user);
          setProfile(userData.profile);
          setIsAdmin(userData.roles?.includes('admin') || false);
          setIsModerator(userData.roles?.includes('moderator') || false);
        } else {
          // If token is invalid, clear it
          localStorage.removeItem('auth_token');
        }
      } catch (error) {
        console.error('Auth status check failed:', error);
        localStorage.removeItem('auth_token');
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);

  const signUp = async (email: string, password: string, metadata?: { first_name?: string; last_name?: string }) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          password_confirmation: password, // Laravel typically requires this
          first_name: metadata?.first_name,
          last_name: metadata?.last_name,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
      
      const data = await response.json();
      toast({
        title: "Registration successful",
        description: "Please check your email for verification instructions",
      });
      
      return data;
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
      
      const data = await response.json();
      
      // Store the token
      localStorage.setItem('auth_token', data.token);
      
      // Set user data
      setUser(data.user);
      setProfile(data.profile);
      setIsAdmin(data.roles?.includes('admin') || false);
      setIsModerator(data.roles?.includes('moderator') || false);
      
      return data;
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      
      if (token) {
        // Call the logout endpoint
        await fetch(`${API_URL}/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
      
      // Clear local state and token regardless of API success
      localStorage.removeItem('auth_token');
      setUser(null);
      setProfile(null);
      setIsAdmin(false);
      setIsModerator(false);
    } catch (error: any) {
      toast({
        title: "Sign out failed",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const value = {
    user,
    profile,
    isLoading,
    signUp,
    signIn,
    signOut,
    isAdmin,
    isModerator
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
