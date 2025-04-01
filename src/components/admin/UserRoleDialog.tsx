
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
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

type AppRole = 'admin' | 'moderator' | 'user';

interface Profile {
  id: string;
  first_name?: string;
  last_name?: string;
  roles: string[];
}

interface UserRoleDialogProps {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  selectedUser: Profile | null;
  selectedRole: AppRole | '';
  setSelectedRole: (role: AppRole | '') => void;
  handleRoleChange: () => Promise<void>;
}

const UserRoleDialog = ({
  dialogOpen,
  setDialogOpen,
  selectedUser,
  selectedRole,
  setSelectedRole,
  handleRoleChange
}: UserRoleDialogProps) => {
  return (
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
  );
};

export default UserRoleDialog;
