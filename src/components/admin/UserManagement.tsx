import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, UserPlus, Shield, UserCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getUsers } from '@/services/auth';

interface User {
  id: string;
  _id?: string; // Support both formats
  username: string;
  role: string;
  createdAt?: string;
}

const UserManagement: React.FC = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [isCreateUserDialogOpen, setIsCreateUserDialogOpen] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    role: 'staff'
  });

  // Load users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

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
      setUsers([]); // Reset to empty array to avoid rendering issues
    } finally {
      setLoadingUsers(false);
    }
  };

  // Handle new user input change
  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle new user role change
  const handleRoleChange = (value: string) => {
    setNewUser(prev => ({
      ...prev,
      role: value
    }));
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

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
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
                      disabled={isCreatingUser}
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
                      disabled={isCreatingUser}
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
                      disabled={isCreatingUser}
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
            <RefreshCw size={24} className="animate-spin mr-2" />
            <span>Loading users...</span>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No users found
          </div>
        ) : (
          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="py-3 px-4 text-left font-medium">Username</th>
                    <th className="py-3 px-4 text-left font-medium">Role</th>
                    <th className="py-3 px-4 text-left font-medium">Created</th>
                    <th className="py-3 px-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users && users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user.id || user._id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">{user.username}</td>
                        <td className="py-3 px-4">
                          <Badge variant={user.role === 'admin' ? 'default' : 'outline'}>
                            {user.role === 'admin' ? (
                              <div className="flex items-center">
                                <Shield size={12} className="mr-1" />
                                Administrator
                              </div>
                            ) : (
                              'Staff'
                            )}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">{formatDate(user.createdAt)}</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm" disabled>
                            <UserCheck size={16} className="mr-2" />
                            View
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-gray-500">
                        No users found. Try refreshing the list.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserManagement;
