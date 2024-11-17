import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

const generatePredictionData = (baseline: number, volatility: number, days: number) => {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const predicted = baseline + (Math.sin(i / 5) + Math.random() - 0.5) * volatility;
    const lower = predicted * 0.9;
    const upper = predicted * 1.1;
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      predicted,
      lower,
      upper,
    };
  });
};

export const Predictions = () => {
  const [timeframe, setTimeframe] = useState<'7d' | '14d' | '30d'>('14d');
  
  const predictionData = {
    satisfaction: generatePredictionData(4.5, 0.3, timeframe === '7d' ? 7 : timeframe === '14d' ? 14 : 30),
    volume: generatePredictionData(150, 20, timeframe === '7d' ? 7 : timeframe === '14d' ? 14 : 30),
    responseTime: generatePredictionData(3, 0.5, timeframe === '7d' ? 7 : timeframe === '14d' ? 14 : 30),
  };

  const anomalies = [
    { date: 'Mar 15', metric: 'Response Time', severity: 'High', impact: 'Customer Satisfaction at risk' },
    { date: 'Mar 18', metric: 'Volume', severity: 'Medium', impact: 'Staffing adjustment needed' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Predictions & Forecasting</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeframe('7d')}
            className={`px-4 py-2 rounded-lg ${
              timeframe === '7d'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            7D
          </button>
          <button
            onClick={() => setTimeframe('14d')}
            className={`px-4 py-2 rounded-lg ${
              timeframe === '14d'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            14D
          </button>
          <button
            onClick={() => setTimeframe('30d')}
            className={`px-4 py-2 rounded-lg ${
              timeframe === '30d'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            30D
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Customer Satisfaction Prediction */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-4">Customer Satisfaction Forecast</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={predictionData.satisfaction}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[3, 5]} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="upper"
                  stroke="transparent"
                  fill="#6366F1"
                  fillOpacity={0.1}
                />
                <Area
                  type="monotone"
                  dataKey="lower"
                  stroke="transparent"
                  fill="#6366F1"
                  fillOpacity={0.1}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#6366F1"
                  strokeWidth={2}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Volume & Response Time Predictions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Ticket Volume Forecast</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={predictionData.volume}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Response Time Forecast</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={predictionData.responseTime}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Anomaly Detection */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-4">Predicted Anomalies</h3>
          <div className="space-y-4">
            {anomalies.map((anomaly, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-red-50 dark:bg-red-900/20 rounded-lg"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 mt-1 mr-3" />
                <div>
                  <div className="flex items-center">
                    <span className="font-medium text-red-600 dark:text-red-400">
                      {anomaly.metric}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">{anomaly.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {anomaly.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};