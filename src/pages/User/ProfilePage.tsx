
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageLayout from '@/components/layout/PageLayout';
import { api } from '@/services/api';

const ProfilePage = () => {
  const { user, profile, signOut } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name || '');
      setLastName(profile.last_name || '');
    }
  }, [profile]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setLoading(true);
      
      await api.profile.update({
        first_name: firstName,
        last_name: lastName,
      });

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully."
      });
    } catch (error: any) {
      toast({
        title: "Error updating profile",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Your Profile">
      <div className="container max-w-4xl py-12 mandala-bg">
        <Card className="border-2 border-indian-saffron/20 decorative-border">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight text-indian-blue">Your Profile</CardTitle>
            <CardDescription>
              Update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input 
                      id="first-name" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input 
                      id="last-name" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    value={user?.email}
                    disabled
                  />
                  <p className="text-sm text-muted-foreground">
                    To change your email, please contact an administrator.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-indian-saffron hover:bg-indian-saffron/90"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={signOut}
                  className="border-indian-saffron/30 text-indian-saffron hover:bg-indian-saffron/10"
                >
                  Sign Out
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
