import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: number;
  unit: string;
  change: number;
  timeframe: string;
}

export const KPICard: React.FC<KPICardProps> = ({ title, value, unit, change, timeframe }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
        <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">{unit}</p>
      </div>
      <div className="mt-4 flex items-center">
        {isPositive ? (
          <ArrowUpRight className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownRight className="w-4 h-4 text-red-500" />
        )}
        <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(change)}%
        </span>
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">vs last {timeframe}</span>
      </div>
    </div>
  );
}