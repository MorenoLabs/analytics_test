import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StaffingScenario {
  name: string;
  currentStaff: number;
  optimalStaff: number;
  costSavings: number;
  serviceImprovement: number;
}

export const StaffingAnalysis = () => {
  const [scenarios] = useState<StaffingScenario[]>([
    {
      name: 'Morning Shift',
      currentStaff: 25,
      optimalStaff: 30,
      costSavings: -15000,
      serviceImprovement: 15,
    },
    {
      name: 'Afternoon Shift',
      currentStaff: 35,
      optimalStaff: 28,
      costSavings: 21000,
      serviceImprovement: -5,
    },
    {
      name: 'Night Shift',
      currentStaff: 15,
      optimalStaff: 12,
      costSavings: 9000,
      serviceImprovement: -2,
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Staffing Analysis</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-4">Staff Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scenarios}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="currentStaff" fill="#6366F1" name="Current Staff" />
                <Bar dataKey="optimalStaff" fill="#10B981" name="Optimal Staff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-4">Impact Analysis</h3>
          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <div key={scenario.name} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-medium mb-2">{scenario.name}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Staff Difference</p>
                    <p className="text-lg font-medium">
                      {scenario.optimalStaff - scenario.currentStaff > 0 ? '+' : ''}
                      {scenario.optimalStaff - scenario.currentStaff}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cost Impact</p>
                    <p className={`text-lg font-medium ${scenario.costSavings > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      ${Math.abs(scenario.costSavings).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};