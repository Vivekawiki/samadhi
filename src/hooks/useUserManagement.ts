
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

// Define the app_role type to match what we would have had in Supabase enum
type AppRole = 'admin' | 'moderator' | 'user';

interface Profile {
  id: string;
  first_name?: string;
  last_name?: string;
  roles: string[];
}

export const useUserManagement = () => {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<Profile | null>(null);
  const [selectedRole, setSelectedRole] = useState<AppRole | ''>('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // Mock fetching users with roles
      // This would be replaced by an actual API call in production
      const mockUsers = [
        {
          id: 'user-1',
          first_name: 'John',
          last_name: 'Doe',
          roles: ['admin', 'user']
        },
        {
          id: 'user-2',
          first_name: 'Jane',
          last_name: 'Smith',
          roles: ['user']
        },
        {
          id: 'user-3',
          first_name: 'Robert',
          last_name: 'Johnson',
          roles: ['moderator', 'user']
        },
      ];
      
      setUsers(mockUsers);
    } catch (error: any) {
      toast({
        title: "Error fetching users",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async () => {
    if (!selectedUser || !selectedRole) return;

    try {
      // Check if user already has this role
      const hasRole = selectedUser.roles.includes(selectedRole);
      
      if (hasRole) {
        // Remove role (mock implementation)
        console.log(`Removing ${selectedRole} role from user ${selectedUser.id}`);
        
        // In production, this would call an API endpoint
        const updatedUsers = users.map(user => {
          if (user.id === selectedUser.id) {
            return {
              ...user,
              roles: user.roles.filter(r => r !== selectedRole)
            };
          }
          return user;
        });
        
        setUsers(updatedUsers);
        
        toast({
          title: "Role removed",
          description: `${selectedRole} role removed from user.`
        });
      } else {
        // Add role (mock implementation)
        console.log(`Adding ${selectedRole} role to user ${selectedUser.id}`);
        
        // In production, this would call an API endpoint
        const updatedUsers = users.map(user => {
          if (user.id === selectedUser.id) {
            return {
              ...user,
              roles: [...user.roles, selectedRole]
            };
          }
          return user;
        });
        
        setUsers(updatedUsers);
        
        toast({
          title: "Role added",
          description: `${selectedRole} role added to user.`
        });
      }
      
      setDialogOpen(false);
    } catch (error: any) {
      toast({
        title: "Error changing role",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const openRoleDialog = (user: Profile) => {
    setSelectedUser(user);
    setSelectedRole('');
    setDialogOpen(true);
  };

  const filteredUsers = users.filter(user => {
    const searchLower = searchQuery.toLowerCase();
    return (
      user.first_name?.toLowerCase().includes(searchLower) ||
      user.last_name?.toLowerCase().includes(searchLower) ||
      user.id.toLowerCase().includes(searchLower)
    );
  });

  return {
    users,
    loading,
    searchQuery,
    setSearchQuery,
    selectedUser,
    selectedRole,
    setSelectedRole,
    dialogOpen,
    setDialogOpen,
    filteredUsers,
    handleRoleChange,
    openRoleDialog
  };
};
