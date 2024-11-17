import React from 'react';
import { KPICard } from '../components/KPICard';
import { PerformanceChart } from '../components/PerformanceChart';
import { TeamHeatmap } from '../components/TeamHeatmap';
import { BarChart4, Bell, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Simulated data - in a real app, this would come from an API
const performanceData = Array.from({ length: 5 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: 75 + Math.random() * 20,
}));

const heatmapData = Array.from({ length: 188 }, (_, i) => ({
  hour: i % 24,
  day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][Math.floor(i / 24)],
  value: Math.random(),
}));

export const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart4 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                Customer Service Analytics
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              <Link to="/user-management" className="flex items-center space-x-2 hover:opacity-80">
                <UserCircle className="h-8 w-8 text-indigo-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{currentUser?.email}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Average Response Time"
            value={2.5}
            unit="minutes"
            change={12}
            timeframe="week"
          />
          <KPICard
            title="Resolution Rate"
            value={94.8}
            unit="%"
            change={3.2}
            timeframe="week"
          />
          <KPICard
            title="Customer Satisfaction"
            value={4.7}
            unit="/5"
            change={0.3}
            timeframe="month"
          />
          <KPICard
            title="Team Performance"
            value={88}
            unit="%"
            change={5.1}
            timeframe="week"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <PerformanceChart
            data={performanceData}
            title="Response Time Trend"
            color="#6366F1"
          />
          <PerformanceChart
            data={performanceData.map((d) => ({ ...d, value: d.value * 0.5 }))}
            title="Resolution Rate Trend"
            color="#10B981"
          />
        </div>

        {/* Team Efficiency Heatmap */}
        <div className="mb-8">
          <TeamHeatmap data={heatmapData} title="Team Efficiency Heatmap" />
        </div>
      </main>
    </div>
  );
};