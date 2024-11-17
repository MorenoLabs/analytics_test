import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  GitBranch,
  Network,
  BarChart2,
  Settings,
  LogOut,
  BarChart4,
  UserCog,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
  { icon: TrendingUp, label: 'KPI Simulation', to: '/kpi-simulation' },
  { icon: Users, label: 'Staffing Analysis', to: '/staffing-analysis' },
  { icon: GitBranch, label: 'Resource Allocation', to: '/resource-allocation' },
  { icon: Network, label: 'Metric Mapping', to: '/metric-mapping' },
  { icon: BarChart2, label: 'Predictions', to: '/predictions' },
];

const bottomNavItems = [
  { icon: UserCog, label: 'User Management', to: '/user-management' },
  { icon: Settings, label: 'Settings', to: '/settings' },
];

export const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed left-0 top-0 flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <BarChart4 className="h-8 w-8 text-indigo-500" />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Analytics Hub</h2>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1">
          {navItems.map(({ icon: Icon, label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive ? 'bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400' : ''
                }`
              }
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="border-t border-gray-200 dark:border-gray-700 py-4">
        <div className="space-y-1">
          {bottomNavItems.map(({ icon: Icon, label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive ? 'bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400' : ''
                }`
              }
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{label}</span>
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};