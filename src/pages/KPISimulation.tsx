import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Sliders } from 'lucide-react';

interface SimulationParams {
  responseTime: number;
  staffCount: number;
  efficiency: number;
}

export const KPISimulation = () => {
  const [params, setParams] = useState<SimulationParams>({
    responseTime: 2.5,
    staffCount: 20,
    efficiency: 85,
  });

  const simulatedData = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    predicted: Math.min(100, params.efficiency * (1 + Math.sin(i / 3) * 0.2)),
    actual: Math.min(100, params.efficiency * (1 + Math.sin(i / 3) * 0.2) * (Math.random() * 0.3 + 0.85)),
  }));

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">KPI Simulation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <label className="block text-sm font-medium mb-2">Response Time Target (min)</label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={params.responseTime}
              onChange={(e) => setParams({ ...params, responseTime: parseFloat(e.target.value) })}
              className="w-full"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">{params.responseTime} minutes</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <label className="block text-sm font-medium mb-2">Staff Count</label>
            <input
              type="range"
              min="10"
              max="50"
              value={params.staffCount}
              onChange={(e) => setParams({ ...params, staffCount: parseInt(e.target.value) })}
              className="w-full"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">{params.staffCount} agents</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <label className="block text-sm font-medium mb-2">Efficiency Target (%)</label>
            <input
              type="range"
              min="50"
              max="100"
              value={params.efficiency}
              onChange={(e) => setParams({ ...params, efficiency: parseInt(e.target.value) })}
              className="w-full"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">{params.efficiency}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium mb-4">Simulation Results</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={simulatedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="predicted" stroke="#6366F1" name="Predicted" />
              <Line type="monotone" dataKey="actual" stroke="#10B981" name="Actual" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};