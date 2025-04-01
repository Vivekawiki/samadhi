
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageLayout from '@/components/layout/PageLayout';
import SearchBar from '@/components/admin/SearchBar';
import UsersTable from '@/components/admin/UsersTable';
import UserRoleDialog from '@/components/admin/UserRoleDialog';
import { useUserManagement } from '@/hooks/useUserManagement';

const AdminDashboard = () => {
  const {
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
  } = useUserManagement();

  return (
    <PageLayout title="Admin Dashboard">
      <div className="container py-12">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage users and permissions</p>
            </div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage roles and permissions for users</CardDescription>
            </CardHeader>
            <CardContent>
              <UsersTable 
                loading={loading}
                users={[]} // Not needed, but keeping the prop for future use
                filteredUsers={filteredUsers}
                openRoleDialog={openRoleDialog}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <UserRoleDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedUser={selectedUser}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        handleRoleChange={handleRoleChange}
      />
    </PageLayout>
  );
};

export default AdminDashboard;
