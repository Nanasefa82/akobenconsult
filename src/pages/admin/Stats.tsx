import React, { useState, useEffect } from 'react';
import { getMessageStats, MessageStats } from '@/services/message';
import { useToast } from '@/hooks/use-toast';
import AdminLayout from '@/components/admin/AdminLayout';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Stats: React.FC = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState<MessageStats>({
    total: 0,
    new: 0,
    read: 0,
    replied: 0,
    archived: 0
  });
  const [loading, setLoading] = useState(true);

  // Fetch message statistics
  const fetchStats = async () => {
    setLoading(true);
    try {
      const response = await getMessageStats();
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching message stats:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch message statistics',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchStats();
  }, []);

  // Calculate percentages
  const getPercentage = (value: number) => {
    if (stats.total === 0) return 0;
    return Math.round((value / stats.total) * 100);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Message Statistics</h1>
          <Button 
            variant="outline" 
            onClick={fetchStats}
            disabled={loading}
          >
            <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Total Messages */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Total Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          
          {/* New Messages */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">
                New Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">{stats.new}</div>
              <div className="text-sm text-blue-600 mt-1">
                {getPercentage(stats.new)}% of total
              </div>
            </CardContent>
          </Card>
          
          {/* Read Messages */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-700">
                Read Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">{stats.read}</div>
              <div className="text-sm text-green-600 mt-1">
                {getPercentage(stats.read)}% of total
              </div>
            </CardContent>
          </Card>
          
          {/* Replied Messages */}
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-purple-700">
                Replied Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-700">{stats.replied}</div>
              <div className="text-sm text-purple-600 mt-1">
                {getPercentage(stats.replied)}% of total
              </div>
            </CardContent>
          </Card>
          
          {/* Archived Messages */}
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                Archived Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-700">{stats.archived}</div>
              <div className="text-sm text-gray-600 mt-1">
                {getPercentage(stats.archived)}% of total
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Visual Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Message Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* New Messages Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>New</span>
                    <span>{getPercentage(stats.new)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${getPercentage(stats.new)}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Read Messages Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Read</span>
                    <span>{getPercentage(stats.read)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${getPercentage(stats.read)}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Replied Messages Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Replied</span>
                    <span>{getPercentage(stats.replied)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${getPercentage(stats.replied)}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Archived Messages Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Archived</span>
                    <span>{getPercentage(stats.archived)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-gray-600 h-2.5 rounded-full" 
                      style={{ width: `${getPercentage(stats.archived)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Response Rate Card */}
          <Card>
            <CardHeader>
              <CardTitle>Response Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                {/* Response Rate */}
                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stats.total > 0 ? Math.round((stats.replied / stats.total) * 100) : 0}%
                  </div>
                  <div className="text-sm text-gray-500 text-center">Response Rate</div>
                </div>
                
                {/* Pending Rate */}
                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {stats.total > 0 ? Math.round(((stats.new + stats.read) / stats.total) * 100) : 0}%
                  </div>
                  <div className="text-sm text-gray-500 text-center">Pending Rate</div>
                </div>
                
                {/* Messages Needing Attention */}
                <div className="col-span-2">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h3 className="font-medium text-amber-800 mb-2">Messages Needing Attention</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-700">New + Read Messages</span>
                      <span className="font-bold text-amber-700">{stats.new + stats.read}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Stats;
