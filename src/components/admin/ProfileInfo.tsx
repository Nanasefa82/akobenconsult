import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProfileInfoProps {
  profile: {
    username: string;
    role: string;
  };
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [profileData, setProfileData] = useState({
    username: profile.username,
    role: profile.role
  });

  // Handle profile data change
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle save profile
  const handleSaveProfile = async () => {
    setIsSaving(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Profile Updated',
        description: 'Your profile information has been updated successfully.',
        variant: 'default'
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to update profile. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Profile Information</CardTitle>
        <CardDescription>
          View and update your account information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            value={profileData.username}
            onChange={handleProfileChange}
            disabled
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            name="role"
            value={profileData.role === 'admin' ? 'Administrator' : 'Staff'}
            disabled
          />
          <p className="text-xs text-gray-500">
            Your role cannot be changed from this interface.
          </p>
        </div>
        
        <Button 
          onClick={handleSaveProfile}
          disabled={isSaving || (profileData.username === profile.username)}
        >
          {isSaving ? (
            <>
              <span className="mr-2">Saving...</span>
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            </>
          ) : (
            <>
              <Save size={16} className="mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
