import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';
import { logout } from '@/services/auth';

const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="w-64 bg-secondary text-white h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/admin/messages" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'
                }`
              }
            >
              <MessageSquare size={20} className="mr-3" />
              <span>Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/stats" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'
                }`
              }
            >
              <BarChart3 size={20} className="mr-3" />
              <span>Statistics</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/settings" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'
                }`
              }
            >
              <Settings size={20} className="mr-3" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/profile" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'
                }`
              }
            >
              <User size={20} className="mr-3" />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <button 
          onClick={handleLogout}
          className="flex items-center p-3 w-full rounded-md hover:bg-gray-700 transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
