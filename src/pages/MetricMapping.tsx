import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Metric {
  id: string;
  name: string;
  value: number;
  impact: number;
  trend: { date: string; value: number }[];
  dependencies: string[];
}

export const MetricMapping = () => {
  const [metrics] = useState<Metric[]>([
    {
      id: '1',
      name: 'Response Time',
      value: 2.5,
      impact: 85,
      trend: Array.from({ length: 7 }, (_, i) => ({
        date: `Day ${i + 1}`,
        value: 2.5 + Math.random() * 0.5,
      })),
      dependencies: ['Staff Availability', 'Query Complexity', 'Tool Efficiency'],
    },
    {
      id: '2',
      name: 'Resolution Rate',
      value: 94.8,
      impact: 92,
      trend: Array.from({ length: 7 }, (_, i) => ({
        date: `Day ${i + 1}`,
        value: 94 + Math.random() * 2,
      })),
      dependencies: ['Staff Knowledge', 'Documentation Quality', 'Customer Clarity'],
    },
    {
      id: '3',
      name: 'Customer Satisfaction',
      value: 4.7,
      impact: 95,
      trend: Array.from({ length: 7 }, (_, i) => ({
        date: `Day ${i + 1}`,
        value: 4.5 + Math.random() * 0.5,
      })),
      dependencies: ['Response Time', 'Resolution Rate', 'Staff Courtesy'],
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Metric Mapping</h2>

      <div className="grid grid-cols-1 gap-6">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Metric Info */}
              <div>
                <h3 className="text-lg font-medium mb-4">{metric.name}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Current Value</p>
                    <p className="text-2xl font-semibold">{metric.value}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Business Impact</p>
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-indigo-600 rounded-full"
                          style={{ width: `${metric.impact}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm font-medium">{metric.impact}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Dependencies</p>
                    <div className="flex flex-wrap gap-2">
                      {metric.dependencies.map((dep) => (
                        <span
                          key={dep}
                          className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700"
                        >
                          {dep}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trend Chart */}
              <div className="lg:col-span-2">
                <h4 className="text-sm font-medium text-gray-500 mb-4">7-Day Trend</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metric.trend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['auto', 'auto']} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#6366F1"
                        strokeWidth={2}
                        dot={{ fill: '#6366F1' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};