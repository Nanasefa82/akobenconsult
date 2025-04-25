import api from './api';

export interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface MessageStats {
  total: number;
  new: number;
  read: number;
  replied: number;
  archived: number;
}

export interface PaginationData {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface MessagesResponse {
  success: boolean;
  data: Message[];
  pagination: PaginationData;
}

export interface MessageResponse {
  success: boolean;
  data: Message;
}

export interface StatsResponse {
  success: boolean;
  data: MessageStats;
}

// Get all messages with optional filtering
export const getMessages = async (
  page = 1, 
  limit = 10, 
  status = 'all', 
  search = ''
): Promise<MessagesResponse> => {
  const response = await api.get<MessagesResponse>('/messages', {
    params: { page, limit, status, search }
  });
  return response.data;
};

// Get a single message by ID
export const getMessage = async (id: string): Promise<MessageResponse> => {
  const response = await api.get<MessageResponse>(`/messages/${id}`);
  return response.data;
};

// Update message status
export const updateMessageStatus = async (
  id: string, 
  status: 'new' | 'read' | 'replied' | 'archived'
): Promise<MessageResponse> => {
  const response = await api.put<MessageResponse>(`/messages/${id}/status`, { status });
  return response.data;
};

// Delete a message
export const deleteMessage = async (id: string): Promise<{ success: boolean }> => {
  const response = await api.delete(`/messages/${id}`);
  return response.data;
};

// Get message statistics
export const getMessageStats = async (): Promise<StatsResponse> => {
  const response = await api.get<StatsResponse>('/messages/stats');
  return response.data;
};
