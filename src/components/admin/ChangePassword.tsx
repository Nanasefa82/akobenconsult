import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Key } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ChangePassword: React.FC = () => {
  const { toast } = useToast();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Handle password data change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle change password
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all password fields.',
        variant: 'destructive'
      });
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: 'Password Mismatch',
        description: 'New password and confirmation do not match.',
        variant: 'destructive'
      });
      return;
    }
    
    if (passwordData.newPassword.length < 8) {
      toast({
        title: 'Password Too Short',
        description: 'New password must be at least 8 characters long.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsChangingPassword(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Password Updated',
        description: 'Your password has been changed successfully.',
        variant: 'default'
      });
      
      // Reset password fields
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error changing password:', error);
      toast({
        title: 'Error',
        description: 'Failed to change password. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Change Password</CardTitle>
        <CardDescription>
          Update your account password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="currentPassword"
              name="currentPassword"
              type="password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              disabled={isChangingPassword}
            />
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              disabled={isChangingPassword}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              disabled={isChangingPassword}
            />
          </div>
          
          <div className="flex items-start space-x-2 text-amber-600 bg-amber-50 p-3 rounded-md">
            <AlertCircle size={18} className="mt-0.5" />
            <p className="text-sm">
              Password must be at least 8 characters long and include a mix of letters, numbers, and special characters for better security.
            </p>
          </div>
          
          <Button 
            type="submit"
            variant="outline"
            disabled={isChangingPassword}
            className="mt-2"
          >
            {isChangingPassword ? (
              <>
                <span className="mr-2">Updating...</span>
                <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
              </>
            ) : (
              <>
                <Key size={16} className="mr-2" />
                Change Password
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChangePassword;
