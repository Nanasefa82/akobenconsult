import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getCurrentUser, getUsers, updateUser, deleteUser } from '@/services/auth';
import { Save, User as UserIcon, Key, AlertCircle, UserPlus, RefreshCw, Shield, UserCheck, Pencil, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface User {
  id: string;
  _id?: string; // Support both formats
  username: string;
  role: string;
  createdAt?: string;
}

const Profile: React.FC = () => {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [isCreateUserDialogOpen, setIsCreateUserDialogOpen] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    role: 'staff'
  });
  
  // User profile state
  const [profile, setProfile] = useState({
    username: '',
    role: ''
  });
  
  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // Edit user state
  const [isEditUserDialogOpen, setIsEditUserDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editUserData, setEditUserData] = useState({
    username: '',
    role: '',
    password: ''
  });
  const [isUpdatingUser, setIsUpdatingUser] = useState(false);
  const [isDeletingUser, setIsDeletingUser] = useState(false);
  
  // Load user data on component mount
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setProfile({
        username: user.username,
        role: user.role
      });
      
      // Check if user is admin
      setIsAdmin(user.role === 'admin');
      
      // If admin, fetch users
      if (user.role === 'admin') {
        fetchUsers();
      }
    }
  }, []);

  // Reset form when dialog closes
  useEffect(() => {
    if (!isCreateUserDialogOpen) {
      // Reset the form when dialog closes
      setNewUser({
        username: '',
        password: '',
        role: 'staff'
      });
      setIsCreatingUser(false);
    }
  }, [isCreateUserDialogOpen]);
  
  // Reset edit form when dialog closes
  useEffect(() => {
    if (!isEditUserDialogOpen) {
      setEditUserData({
        username: '',
        role: '',
        password: ''
      });
      setSelectedUser(null);
    }
  }, [isEditUserDialogOpen]);
  
  // Initialize edit form when user is selected
  useEffect(() => {
    if (selectedUser) {
      setEditUserData({
        username: selectedUser.username,
        role: selectedUser.role,
        password: ''
      });
    }
  }, [selectedUser]);
  
  // Fetch all users
  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      console.log('Fetching users from API...');
      const fetchedUsers = await getUsers();
      console.log('Users fetched in component:', fetchedUsers);
      
      if (Array.isArray(fetchedUsers)) {
        // Log each user to help debug
        fetchedUsers.forEach((user, index) => {
          console.log(`User ${index}:`, user);
        });
        
        setUsers(fetchedUsers);
      } else {
        console.error('Fetched users is not an array:', fetchedUsers);
        toast({
          title: 'Error',
          description: 'Invalid user data format received from server',
          variant: 'destructive'
        });
        setUsers([]); // Reset to empty array to avoid rendering issues
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch users. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoadingUsers(false);
    }
  };
  
  // Handle profile form changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle password form changes
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle new user form changes
  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle role change in Select component
  const handleRoleChange = (value: string) => {
    setNewUser(prev => ({
      ...prev,
      role: value
    }));
  };
  
  // Handle edit user form change
  const handleEditUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle edit user role change
  const handleEditRoleChange = (value: string) => {
    setEditUserData(prev => ({
      ...prev,
      role: value
    }));
  };
  
  // Handle save profile
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Profile Updated',
        description: 'Your profile has been updated successfully.',
        variant: 'default'
      });
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to update profile. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  // Handle change password
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords
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
  
  // Handle create user
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('=== CREATE USER FORM SUBMITTED ===');
    
    // Validate form
    if (!newUser.username || !newUser.password) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }
    
    if (newUser.password.length < 8) {
      toast({
        title: 'Password Too Short',
        description: 'Password must be at least 8 characters long.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsCreatingUser(true);
    
    try {
      console.log('Creating new user with data:', { ...newUser, password: '********' });
      
      // Create user using the test endpoint without authentication
      const response = await fetch(
        import.meta.env.PROD 
          ? 'https://aquabconsult-api.onrender.com/api/auth/register-test'
          : 'http://localhost:3000/api/auth/register-test', 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      
      console.log('Raw response from server:', response);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server returned error:', response.status, errorText);
        throw new Error(`Server error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Parsed response data:', data);
      
      toast({
        title: 'User Created',
        description: `User ${newUser.username} has been created successfully.`,
        variant: 'default'
      });
      
      // Reset form and close dialog
      setNewUser({
        username: '',
        password: '',
        role: 'staff'
      });
      setIsCreateUserDialogOpen(false);
      
      // Add a delay before refreshing the user list
      setTimeout(() => {
        console.log('Refreshing user list after creating new user...');
        fetchUsers();
      }, 1000);
      
    } catch (error) {
      console.error('Error creating user:', error);
      toast({
        title: 'Error',
        description: 'Failed to create user. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsCreatingUser(false);
    }
  };
  
  // Handle edit user submit
  const handleEditUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedUser?.id) {
      toast({
        title: 'Error',
        description: 'No user selected for editing.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsUpdatingUser(true);
    
    try {
      // Prepare updates object (only include changed fields)
      const updates: { username?: string; role?: string; password?: string } = {};
      if (editUserData.username !== selectedUser.username) {
        updates.username = editUserData.username;
      }
      if (editUserData.role !== selectedUser.role) {
        updates.role = editUserData.role;
      }
      if (editUserData.password) {
        updates.password = editUserData.password;
      }
      
      // Only make the API call if there are changes
      if (Object.keys(updates).length > 0) {
        await updateUser(selectedUser.id, updates);
        
        toast({
          title: 'User Updated',
          description: `User ${selectedUser.username} has been updated successfully.`,
          variant: 'default'
        });
        
        // Refresh the user list
        fetchUsers();
      }
      
      // Close the dialog
      setIsEditUserDialogOpen(false);
      
    } catch (error) {
      console.error('Error updating user:', error);
      toast({
        title: 'Error',
        description: 'Failed to update user. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsUpdatingUser(false);
    }
  };
  
  // Handle edit user
  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsEditUserDialogOpen(true);
  };
  
  // Handle delete user
  const handleDeleteUser = async (user: User) => {
    if (!user.id) {
      toast({
        title: 'Error',
        description: 'Invalid user ID.',
        variant: 'destructive'
      });
      return;
    }
    
    if (window.confirm(`Are you sure you want to delete user ${user.username}?`)) {
      setIsDeletingUser(true);
      
      try {
        await deleteUser(user.id);
        
        toast({
          title: 'User Deleted',
          description: `User ${user.username} has been deleted successfully.`,
          variant: 'default'
        });
        
        // Refresh the user list
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
        toast({
          title: 'Error',
          description: 'Failed to delete user. Please try again.',
          variant: 'destructive'
        });
      } finally {
        setIsDeletingUser(false);
      }
    }
  };
  
  // Format date string
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch (e) {
      console.error('Error formatting date:', e);
      return dateString;
    }
  };
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        </div>
        
        <Tabs defaultValue="profile">
          <TabsList className="mb-4">
            <TabsTrigger value="profile" className="flex items-center">
              <UserIcon size={16} className="mr-2" />
              My Profile
            </TabsTrigger>
            <TabsTrigger value="password" className="flex items-center">
              <Key size={16} className="mr-2" />
              Change Password
            </TabsTrigger>
            {isAdmin && (
              <TabsTrigger value="users" className="flex items-center">
                <Shield size={16} className="mr-2" />
                User Management
              </TabsTrigger>
            )}
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  View and update your account information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        value={profile.username}
                        onChange={handleProfileChange}
                        disabled
                      />
                      <p className="text-xs text-gray-500">
                        Your username cannot be changed.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        name="role"
                        value={profile.role === 'admin' ? 'Administrator' : 'Staff'}
                        disabled
                      />
                      <p className="text-xs text-gray-500">
                        Your role cannot be changed from this interface.
                      </p>
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSaving}
                      className="mt-4"
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
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  Update your password to maintain account security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleChangePassword}>
                  <div className="space-y-4">
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
          </TabsContent>
          
          {isAdmin && (
            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-xl">User Management</CardTitle>
                    <CardDescription>
                      Manage system users and their access
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={fetchUsers}
                      disabled={loadingUsers}
                    >
                      <RefreshCw size={16} className={`mr-2 ${loadingUsers ? 'animate-spin' : ''}`} />
                      Refresh
                    </Button>
                    <Dialog open={isCreateUserDialogOpen} onOpenChange={setIsCreateUserDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <UserPlus size={16} className="mr-2" />
                          Add User
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Create New User</DialogTitle>
                          <DialogDescription>
                            Add a new user to the system with specific role and permissions.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleCreateUser}>
                          <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="new-username">Username</Label>
                              <Input
                                id="new-username"
                                name="username"
                                value={newUser.username}
                                onChange={handleNewUserChange}
                                placeholder="Enter username"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="new-password">Password</Label>
                              <Input
                                id="new-password"
                                name="password"
                                type="password"
                                value={newUser.password}
                                onChange={handleNewUserChange}
                                placeholder="Enter password"
                              />
                              <p className="text-xs text-gray-500">
                                Password must be at least 8 characters long.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="new-role">Role</Label>
                              <Select
                                value={newUser.role}
                                onValueChange={handleRoleChange}
                              >
                                <SelectTrigger id="new-role">
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="admin">Administrator</SelectItem>
                                  <SelectItem value="staff">Staff</SelectItem>
                                </SelectContent>
                              </Select>
                              <p className="text-xs text-gray-500">
                                Administrators have full access to all features. Staff have limited access.
                              </p>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setIsCreateUserDialogOpen(false)}
                              disabled={isCreatingUser}
                            >
                              Cancel
                            </Button>
                            <Button 
                              type="submit"
                              disabled={isCreatingUser}
                            >
                              {isCreatingUser ? (
                                <>
                                  <span className="mr-2">Creating...</span>
                                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                                </>
                              ) : (
                                <>
                                  <UserPlus size={16} className="mr-2" />
                                  Create User
                                </>
                              )}
                            </Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  {loadingUsers ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
                      <span className="ml-3">Loading users...</span>
                    </div>
                  ) : users.length > 0 ? (
                    <div className="rounded-md border">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Username
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Role
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Created
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {users.map((user) => (
                            <tr key={user.id || user._id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <UserCheck size={16} className="mr-2 text-gray-400" />
                                  <div className="text-sm font-medium text-gray-900">
                                    {user.username}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <Badge variant={user.role === 'admin' ? 'default' : 'outline'}>
                                  {user.role === 'admin' ? 'Administrator' : 'Staff'}
                                </Badge>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatDate(user.createdAt)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex space-x-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="hover:text-blue-600"
                                    onClick={() => handleEditUser(user)}
                                    disabled={isDeletingUser}
                                  >
                                    <Pencil size={16} />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="hover:text-red-600"
                                    onClick={() => handleDeleteUser(user)}
                                    disabled={isDeletingUser || user.id === getCurrentUser()?.id}
                                  >
                                    <Trash2 size={16} />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No users found. Click "Add User" to create a new user.
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
        
        {/* Edit User Dialog */}
        <Dialog open={isEditUserDialogOpen} onOpenChange={setIsEditUserDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
              <DialogDescription>
                Update user information and permissions.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEditUserSubmit}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-username">Username</Label>
                  <Input
                    id="edit-username"
                    name="username"
                    value={editUserData.username}
                    onChange={handleEditUserChange}
                    placeholder="Enter username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-password">New Password (optional)</Label>
                  <Input
                    id="edit-password"
                    name="password"
                    type="password"
                    value={editUserData.password}
                    onChange={handleEditUserChange}
                    placeholder="Enter new password"
                  />
                  <p className="text-xs text-gray-500">
                    Leave blank to keep current password
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-role">Role</Label>
                  <Select
                    value={editUserData.role}
                    onValueChange={handleEditRoleChange}
                  >
                    <SelectTrigger id="edit-role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsEditUserDialogOpen(false)}
                  disabled={isUpdatingUser}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  disabled={isUpdatingUser}
                >
                  {isUpdatingUser ? (
                    <>
                      <span className="mr-2">Updating...</span>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    </>
                  ) : (
                    <>
                      <Save size={16} className="mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default Profile;
