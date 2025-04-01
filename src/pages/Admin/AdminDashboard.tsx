
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import PageLayout from '@/components/layout/PageLayout';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from '@/services/api';

// Define the app_role type to match what we would have had in Supabase enum
type AppRole = 'admin' | 'moderator' | 'user';

interface Profile {
  id: string;
  first_name?: string;
  last_name?: string;
  roles: string[];
}

const AdminDashboard = () => {
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

  return (
    <PageLayout title="Admin Dashboard">
      <div className="container py-12">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage users and permissions</p>
            </div>
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-[300px]"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage roles and permissions for users</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-8">Loading users...</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>User ID</TableHead>
                      <TableHead>Roles</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center">
                          No users found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            {user.first_name} {user.last_name}
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            {user.id}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {user.roles.map((role: string) => (
                                <span 
                                  key={role}
                                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    role === 'admin' 
                                      ? 'bg-red-100 text-red-800' 
                                      : role === 'moderator' 
                                        ? 'bg-blue-100 text-blue-800' 
                                        : 'bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  {role}
                                </span>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => openRoleDialog(user)}
                            >
                              Change Role
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage User Role</DialogTitle>
            <DialogDescription>
              {selectedUser && `Manage roles for ${selectedUser.first_name} ${selectedUser.last_name}`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="role">Select Role</Label>
              <Select onValueChange={(value: AppRole) => setSelectedRole(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="moderator">Moderator</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {selectedUser && selectedRole && (
              <p className="text-sm">
                {selectedUser.roles.includes(selectedRole)
                  ? `This will remove the ${selectedRole} role from this user.`
                  : `This will add the ${selectedRole} role to this user.`}
              </p>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleRoleChange} disabled={!selectedRole}>
              {selectedUser?.roles.includes(selectedRole) ? 'Remove Role' : 'Add Role'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default AdminDashboard;
