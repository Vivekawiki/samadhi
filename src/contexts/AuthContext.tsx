import React, { createContext, useState, useEffect, useContext } from 'react';
import { api } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

// Define types
interface User {
  id: string;
  email: string;
}

interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: any }>;
  signUp: (email: string, password: string, userData: { firstName?: string; lastName?: string }) => Promise<{ success: boolean; error?: any }>;
  signOut: () => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook for using the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Load user on initial render
  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const currentUser = await api.auth.getCurrentUser();
        
        if (currentUser) {
          setUser(currentUser);
          
          // Load profile
          const userProfile = await api.profile.get(currentUser.id);
          setProfile(userProfile);
          
          // Check admin role
          const hasAdminRole = await api.roles.check('admin');
          setIsAdmin(hasAdminRole);
        }
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadUser();
  }, []);

  // Sign in user
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const user = await api.auth.login(email, password);
      setUser(user);
      
      // Load profile
      const userProfile = await api.profile.get(user.id);
      setProfile(userProfile);
      
      // Check admin role
      const hasAdminRole = await api.roles.check('admin');
      setIsAdmin(hasAdminRole);
      
      toast({
        title: "Welcome back!",
        description: "You've successfully signed in.",
      });
      
      return { success: true };
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message || "Could not sign you in. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  // Sign up user
  const signUp = async (email: string, password: string, userData: { firstName?: string; lastName?: string }) => {
    try {
      setLoading(true);
      const user = await api.auth.register(email, password, {
        first_name: userData.firstName,
        last_name: userData.lastName,
      });
      
      setUser(user);
      
      // Load profile
      const userProfile = await api.profile.get(user.id);
      setProfile(userProfile);
      
      // By default, new users are not admins
      setIsAdmin(false);
      
      toast({
        title: "Account created",
        description: "Your account has been successfully created.",
      });
      
      return { success: true };
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message || "Could not create your account. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      await api.auth.logout();
      setUser(null);
      setProfile(null);
      setIsAdmin(false);
      
      toast({
        title: "Signed out",
        description: "You've been successfully signed out.",
      });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Value object
  const value = {
    user,
    profile,
    isAdmin,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
