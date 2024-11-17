import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Users, Clock, Phone, MessageSquare } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  allocation: number;
  efficiency: number;
  workload: number;
  skills: string[];
}

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444'];

export const ResourceAllocation = () => {
  const [resources] = useState<Resource[]>([
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
  ]);

  const workloadData = resources.map(r => ({
    name: r.name,
    current: r.workload,
    optimal: 75,
  }));

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
                <span className="text-sm text-gray-500">Efficiency</span>
                <span className="font-medium">{resource.efficiency}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Workload</span>
                <span className="font-medium">{resource.workload}%</span>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-500 mb-2">Skills</div>
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