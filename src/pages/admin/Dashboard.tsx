import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { getMessageStats, MessageStats, getMessages, Message } from '@/services/message';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  BarChart3, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  RefreshCw,
  ArrowRight,
  Mail
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<MessageStats>({
    total: 0,
    new: 0,
    read: 0,
    replied: 0,
    archived: 0
  });
  const [recentMessages, setRecentMessages] = useState<Message[]>([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch message stats
        const statsResponse = await getMessageStats();
        setStats(statsResponse.data);
        
        // Fetch recent messages
        const messagesResponse = await getMessages(1, 5, 'all');
        setRecentMessages(messagesResponse.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        toast({
          title: 'Error',
          description: 'Failed to fetch dashboard data',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <AlertCircle size={16} className="text-blue-500" />;
      case 'read':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'replied':
        return <Mail size={16} className="text-purple-500" />;
      case 'archived':
        return <Clock size={16} className="text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()}
            disabled={loading}
          >
            <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Messages */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                <MessageSquare size={16} className="mr-2" />
                Total Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.total}</div>
            </CardContent>
            <CardFooter className="pt-0">
              <Link to="/admin/messages" className="text-sm text-primary hover:underline flex items-center">
                View All Messages
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </CardFooter>
          </Card>
          
          {/* New Messages */}
          <Card className="border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-600 flex items-center">
                <AlertCircle size={16} className="mr-2" />
                New Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.new}</div>
            </CardContent>
            <CardFooter className="pt-0">
              <Link 
                to="/admin/messages?status=new" 
                className="text-sm text-blue-600 hover:underline flex items-center"
              >
                View New Messages
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </CardFooter>
          </Card>
          
          {/* Replied Messages */}
          <Card className="border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-purple-600 flex items-center">
                <Mail size={16} className="mr-2" />
                Replied Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{stats.replied}</div>
            </CardContent>
            <CardFooter className="pt-0">
              <Link 
                to="/admin/messages?status=replied" 
                className="text-sm text-purple-600 hover:underline flex items-center"
              >
                View Replied Messages
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </CardFooter>
          </Card>
          
          {/* Response Rate */}
          <Card className="border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600 flex items-center">
                <BarChart3 size={16} className="mr-2" />
                Response Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {stats.total > 0 ? Math.round((stats.replied / stats.total) * 100) : 0}%
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Link 
                to="/admin/stats" 
                className="text-sm text-green-600 hover:underline flex items-center"
              >
                View Detailed Stats
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>
              The latest messages from your contacts
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <RefreshCw size={24} className="animate-spin mr-2" />
                <span>Loading messages...</span>
              </div>
            ) : recentMessages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No messages found
              </div>
            ) : (
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div 
                    key={message._id}
                    className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-4 mt-1">
                      {getStatusIcon(message.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium truncate">{message.name}</h4>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {formatDate(message.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{message.subject || '(No subject)'}</p>
                      <p className="text-sm text-gray-500 line-clamp-1">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Link to="/admin/messages">
              <Button variant="outline">View All Messages</Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/admin/messages?status=new">
                <Button variant="secondary" className="w-full justify-start">
                  <AlertCircle size={16} className="mr-2" />
                  View New Messages
                </Button>
              </Link>
              <Link to="/admin/stats">
                <Button variant="secondary" className="w-full justify-start">
                  <BarChart3 size={16} className="mr-2" />
                  View Message Statistics
                </Button>
              </Link>
              <Link to="/admin/settings">
                <Button variant="secondary" className="w-full justify-start">
                  <Clock size={16} className="mr-2" />
                  Configure Settings
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
