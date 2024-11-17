import React from 'react';

interface HeatmapData {
  hour: number;
  day: string;
  value: number;
}

interface TeamHeatmapProps {
  data: HeatmapData[];
  title: string;
}

export const TeamHeatmap: React.FC<TeamHeatmapProps> = ({ data, title }) => {
  const getColor = (value: number) => {
    if (value >= 0.8) return 'bg-green-500';
    if (value >= 0.6) return 'bg-green-400';
    if (value >= 0.4) return 'bg-yellow-400';
    if (value >= 0.2) return 'bg-orange-400';
    return 'bg-red-400';
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="grid grid-cols-25 gap-1">
        <div className="col-span-1"></div>
        {hours.map((hour) => (
          <div key={hour} className="text-xs text-gray-500 text-center">
            {hour}
          </div>
        ))}
        {days.map((day) => (
          <React.Fragment key={day}>
            <div className="text-xs text-gray-500">{day}</div>
            {hours.map((hour) => {
              const cellData = data.find((d) => d.day === day && d.hour === hour);
              return (
                <div
                  key={`${day}-${hour}`}
                  className={`w-full h-4 rounded ${getColor(cellData?.value || 0)}`}
                  title={`${day} ${hour}:00 - Efficiency: ${((cellData?.value || 0) * 100).toFixed(
                    0
                  )}%`}
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}