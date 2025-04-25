import api from './api';

interface LoginCredentials {
  username: string;
  password: string;
}

interface User {
  id: string;
  username: string;
  role: string;
}

interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

// Login user
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', credentials);
  
  // Store token and user in localStorage
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  
  return response.data;
};

// Logout user
export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem('token');
};

// Check if user is admin
export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'admin';
};

// Get all users (admin only)
export const getUsers = async (): Promise<User[]> => {
  try {
    console.log('Calling getUsers API...');
    const response = await api.get<{ success: boolean; data: User[] }>('/auth/users');
    console.log('Users API response:', response.data);
    
    if (response.data && response.data.data && Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      console.error('Invalid response format from users API:', response.data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Create a new user (admin only)
export const createUser = async (user: { username: string; password: string; role: string }): Promise<User> => {
  try {
    console.log('Sending create user request to API:', { ...user, password: '********' });
    const response = await api.post<{ success: boolean; user: User }>('/auth/register', user);
    console.log('Create user response from API:', response.data); 
    return response.data.user;
  } catch (error) {
    console.error('Error in createUser API call:', error);
    throw error;
  }
};

// Create a new user (admin only) - Test version without auth
export const createUserTest = async (user: { username: string; password: string; role: string }): Promise<User> => {
  try {
    console.log('Sending create user request to TEST API:', { ...user, password: '********' });
    const response = await api.post<{ success: boolean; user: User }>('/auth/register-test', user);
    console.log('Create user TEST response from API:', response.data); 
    return response.data.user;
  } catch (error) {
    console.error('Error in createUserTest API call:', error);
    throw error;
  }
};

// Update a user (admin only)
export const updateUser = async (userId: string, updates: { username?: string; role?: string; password?: string }): Promise<User> => {
  try {
    console.log('Sending update user request to API:', { userId, ...updates, password: updates.password ? '********' : undefined });
    const response = await api.put<{ success: boolean; user: User }>(`/auth/users/${userId}`, updates);
    console.log('Update user response from API:', response.data);
    return response.data.user;
  } catch (error) {
    console.error('Error in updateUser API call:', error);
    throw error;
  }
};

// Delete a user (admin only)
export const deleteUser = async (userId: string): Promise<void> => {
  try {
    console.log('Sending delete user request to API:', { userId });
    await api.delete(`/auth/users/${userId}`);
    console.log('User deleted successfully');
  } catch (error) {
    console.error('Error in deleteUser API call:', error);
    throw error;
  }
};
