import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, Pie, PieChart } from 'recharts';
import { Users, Clock, Phone, MessageSquare, Loader2 } from 'lucide-react';
import { resourceService, ResourceData } from '../services/api';

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444'];

// Mock data for fallback
const mockResources: ResourceData[] = [
  {
    id: '1',
    name: 'Phone Support',
    allocation: 40,
    efficiency: 85,
    workload: 75,
    skills: ['Voice', 'Problem Solving', 'Product Knowledge'],
  },
  {
    id: '2',
    name: 'Live Chat',
    allocation: 30,
    efficiency: 92,
    workload: 65,
    skills: ['Written Communication', 'Multi-tasking', 'Technical Support'],
  },
  {
    id: '3',
    name: 'Email Support',
    allocation: 20,
    efficiency: 88,
    workload: 90,
    skills: ['Writing', 'Research', 'Documentation'],
  },
  {
    id: '4',
    name: 'Social Media',
    allocation: 10,
    efficiency: 78,
    workload: 45,
    skills: ['Social Media', 'Crisis Management', 'Brand Voice'],
  },
];

export const ResourceAllocation = () => {
  const [resources, setResources] = useState<ResourceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const workloadData = resources.map(r => ({
    name: r.name,
    current: r.workload,
    optimal: 75,
  }));

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        const response = await resourceService.getResources();
        setResources(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching resources:', err instanceof Error ? err.message : 'Unknown error');
        // Fallback to mock data if API fails
        setResources(mockResources);
        setError(null); // Clear error since we're using mock data
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Resource Allocation</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Resource Distribution */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-4">Resource Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resources}
                  dataKey="allocation"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label={({ name, value }) => `${name} (${value}%)`}
                >
                  {resources.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workload Analysis */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-4">Workload Analysis</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workloadData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="current" name="Current Workload" fill="#6366F1" />
                <Bar dataKey="optimal" name="Optimal Level" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              {resource.name === 'Phone Support' && <Phone className="w-5 h-5 text-indigo-500 mr-2" />}
              {resource.name === 'Live Chat' && <MessageSquare className="w-5 h-5 text-green-500 mr-2" />}
              {resource.name === 'Email Support' && <Clock className="w-5 h-5 text-yellow-500 mr-2" />}
              {resource.name === 'Social Media' && <Users className="w-5 h-5 text-red-500 mr-2" />}
              <h4 className="font-medium">{resource.name}</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Efficiency</span>
                <span className="font-medium">{resource.efficiency}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Workload</span>
                <span className="font-medium">{resource.workload}%</span>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Skills</div>
                <div className="flex flex-wrap gap-2">
                  {resource.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};