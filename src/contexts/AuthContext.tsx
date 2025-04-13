import React, { createContext, useState, useEffect, useContext } from 'react';
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
  isTeacher: boolean; // Added teacher role state
  isLoading: boolean;
  isModerator: boolean;
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
  const [isTeacher, setIsTeacher] = useState(false); // Added teacher state
  const [isLoading, setLoading] = useState(true);
  const [isModerator, setIsModerator] = useState(false);
  const { toast } = useToast();

  // Load user on initial render
  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        // Removed: const currentUser = await api.auth.getCurrentUser();
        
        // Removed: if (currentUser) {
          // Removed: setUser(currentUser);
          
          // Removed: // Load profile
          // Removed: const userProfile = await api.profile.get(currentUser.id);
          // Removed: setProfile(userProfile);
          
          // Removed: // Check admin role
          // Removed: const hasAdminRole = await api.roles.check('admin');
          // Removed: setIsAdmin(hasAdminRole);
          
          // Removed: // Check moderator role
          // Removed: const hasModeratorRole = await api.roles.check('moderator');
          // Removed: setIsModerator(hasModeratorRole);

          // Removed: // Placeholder: Check teacher role (adjust based on your API)
          // Removed: const hasTeacherRole = await api.roles.check('teacher'); 
          // Removed: setIsTeacher(hasTeacherRole); 
        // Removed: }
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
      // Removed: const user = await api.auth.login(email, password);
      // Removed: setUser(user);
      
      // Removed: // Load profile
      // Removed: const userProfile = await api.profile.get(user.id);
      // Removed: setProfile(userProfile);
      
      // Removed: // Check admin role
      // Removed: const hasAdminRole = await api.roles.check('admin');
      // Removed: setIsAdmin(hasAdminRole);
      
      // Removed: // Check moderator role
      // Removed: const hasModeratorRole = await api.roles.check('moderator');
      // Removed: setIsModerator(hasModeratorRole);

      // Removed: // Placeholder: Check teacher role (adjust based on your API)
      // Removed: const hasTeacherRole = await api.roles.check('teacher');
      // Removed: setIsTeacher(hasTeacherRole);
      
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
      // Removed: const user = await api.auth.register(email, password, {
        // Removed: firstName: userData.firstName,
        // Removed: lastName: userData.lastName,
      // Removed: });
      
      // Removed: setUser(user);
      
      // Removed: // Load profile
      // Removed: const userProfile = await api.profile.get(user.id);
      // Removed: setProfile(userProfile);
      
      // By default, new users are not admins or teachers
      setIsAdmin(false);
      setIsModerator(false);
      setIsTeacher(false); // Initialize teacher role
      
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
      // Removed: await api.auth.logout();
      setUser(null);
      setProfile(null);
      setIsAdmin(false);
      setIsModerator(false);
      setIsTeacher(false); // Reset teacher role on sign out
      
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
    isTeacher, // Added teacher state to context value
    isLoading,
    isModerator,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
