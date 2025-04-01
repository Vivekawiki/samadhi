
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Profile {
  id: string;
  first_name?: string;
  last_name?: string;
  roles: string[];
}

interface UsersTableProps {
  loading: boolean;
  users: Profile[];
  filteredUsers: Profile[];
  openRoleDialog: (user: Profile) => void;
}

const UsersTable = ({ loading, users, filteredUsers, openRoleDialog }: UsersTableProps) => {
  if (loading) {
    return <div className="flex justify-center py-8">Loading users...</div>;
  }

  return (
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
  );
};

export default UsersTable;
