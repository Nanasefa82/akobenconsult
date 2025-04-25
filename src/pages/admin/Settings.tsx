import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Save, Bell, Shield } from 'lucide-react';

const Settings: React.FC = () => {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  
  // Notification settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    newMessageAlert: true,
    dailySummary: false,
    weeklyReport: true
  });
  
  // Security settings
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: '30',
    ipRestriction: false
  });
  
  // Handle notification toggle
  const handleNotificationToggle = (name: string) => {
    setNotifications(prev => ({
      ...prev,
      [name]: !prev[name as keyof typeof prev]
    }));
  };
  
  // Handle security change
  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSecurity(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  // Handle security toggle
  const handleSecurityToggle = (name: string) => {
    setSecurity(prev => ({
      ...prev,
      [name]: !prev[name as keyof typeof prev]
    }));
  };
  
  // Handle save settings
  const handleSaveSettings = async (tab: string) => {
    setIsSaving(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Settings Saved',
        description: `Your ${tab} settings have been updated successfully.`,
        variant: 'default'
      });
    } catch (error) {
      console.error(`Error saving ${tab} settings:`, error);
      toast({
        title: 'Error',
        description: `Failed to save ${tab} settings. Please try again.`,
        variant: 'destructive'
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell size={16} className="mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <Shield size={16} className="mr-2" />
              Security
            </TabsTrigger>
          </TabsList>
          
          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure how and when you receive notifications about messages.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-gray-500">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={notifications.emailNotifications}
                    onCheckedChange={() => handleNotificationToggle('emailNotifications')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="newMessageAlert">New Message Alerts</Label>
                    <p className="text-sm text-gray-500">
                      Get notified when a new message is received
                    </p>
                  </div>
                  <Switch
                    id="newMessageAlert"
                    checked={notifications.newMessageAlert}
                    onCheckedChange={() => handleNotificationToggle('newMessageAlert')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dailySummary">Daily Summary</Label>
                    <p className="text-sm text-gray-500">
                      Receive a daily summary of messages
                    </p>
                  </div>
                  <Switch
                    id="dailySummary"
                    checked={notifications.dailySummary}
                    onCheckedChange={() => handleNotificationToggle('dailySummary')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="weeklyReport">Weekly Report</Label>
                    <p className="text-sm text-gray-500">
                      Receive a weekly report of message statistics
                    </p>
                  </div>
                  <Switch
                    id="weeklyReport"
                    checked={notifications.weeklyReport}
                    onCheckedChange={() => handleNotificationToggle('weeklyReport')}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSaveSettings('notifications')}
                  disabled={isSaving}
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
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Security Settings */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Configure your account security preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch
                    id="twoFactorAuth"
                    checked={security.twoFactorAuth}
                    onCheckedChange={() => handleSecurityToggle('twoFactorAuth')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    name="sessionTimeout"
                    type="number"
                    min="5"
                    max="120"
                    value={security.sessionTimeout}
                    onChange={handleSecurityChange}
                  />
                  <p className="text-sm text-gray-500">
                    Automatically log out after period of inactivity
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ipRestriction">IP Restriction</Label>
                    <p className="text-sm text-gray-500">
                      Restrict login to specific IP addresses
                    </p>
                  </div>
                  <Switch
                    id="ipRestriction"
                    checked={security.ipRestriction}
                    onCheckedChange={() => handleSecurityToggle('ipRestriction')}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSaveSettings('security')}
                  disabled={isSaving}
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
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
