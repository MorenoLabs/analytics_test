import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface ComponentInfo {
  title: string;
  description: string;
  color: string;
}

const components: Record<string, ComponentInfo> = {
  'human-loop': {
    title: 'Human in the Loop',
    description: 'Interactive feedback system allowing human oversight and intervention in the AI processes.',
    color: 'bg-gray-300',
  },
  'data-crm': {
    title: 'Data CRM/QA/WFM',
    description: 'Centralized data management system integrating Customer Relationship Management, Quality Assurance, and Workforce Management.',
    color: 'bg-gray-500',
  },
  'synthetic-data': {
    title: 'Synthetic Data Generator',
    description: 'Creates artificial data sets for testing and training the system.',
    color: 'bg-white',
  },
  'llm': {
    title: 'LLM',
    description: 'Large Language Model for natural language processing and understanding.',
    color: 'bg-yellow-300',
  },
  'scoring': {
    title: 'Scoring & Priority',
    description: 'Evaluates and prioritizes tasks based on various metrics and importance factors.',
    color: 'bg-blue-500',
  },
  'anomaly': {
    title: 'Anomaly Pattern Detection',
    description: 'Identifies unusual patterns and potential issues in the system.',
    color: 'bg-yellow-500',
  },
  'digital-twin': {
    title: 'Digital Twin Simulation',
    description: 'Virtual representation of the system for testing and optimization.',
    color: 'bg-white',
  },
  'deep-forecasting': {
    title: 'Deep Forecasting',
    description: 'Advanced predictive analytics for product and operations.',
    color: 'bg-green-400',
  },
  'output-matrix': {
    title: 'Output Matrix',
    description: 'Consolidated view of system outputs and decisions.',
    color: 'bg-gray-200',
  },
  'reports': {
    title: 'Reports & Insights',
    description: 'Comprehensive reporting and analytical insights.',
    color: 'bg-gray-100',
  },
  'cs-management': {
    title: 'CS Management',
    description: 'Customer Service Management interface and tools.',
    color: 'bg-cyan-400',
  },
  'cs-operations': {
    title: 'CS Operations',
    description: 'Customer Service Operations management and monitoring.',
    color: 'bg-cyan-400',
  },
  'cx': {
    title: 'CX',
    description: 'Customer Experience management and optimization.',
    color: 'bg-cyan-400',
  },
  'product': {
    title: 'Product',
    description: 'Product development and management interface.',
    color: 'bg-blue-400',
  },
  'central-bi': {
    title: 'Central BI',
    description: 'Central Business Intelligence system for data analytics.',
    color: 'bg-blue-400',
  },
};

// Helper function to position components
const getPositionForComponent = (key: string): React.CSSProperties => {
  const positions: Record<string, React.CSSProperties> = {
    'human-loop': { left: '50px', top: '50px' },
    'data-crm': { left: '300px', top: '50px' },
    'synthetic-data': { left: '300px', top: '150px' },
    'llm': { left: '200px', top: '200px' },
    'scoring': { left: '400px', top: '200px' },
    'anomaly': { left: '400px', top: '300px' },
    'digital-twin': { left: '200px', top: '400px' },
    'deep-forecasting': { left: '400px', top: '400px' },
    'output-matrix': { left: '600px', top: '200px' },
    'reports': { left: '800px', top: '100px' },
    'cs-management': { left: '1000px', top: '50px' },
    'cs-operations': { left: '1000px', top: '150px' },
    'cx': { left: '1000px', top: '250px' },
    'product': { left: '1000px', top: '350px' },
    'central-bi': { left: '800px', top: '400px' },
  };

  return positions[key] || { left: '0px', top: '0px' };
};

export const TechnicalDiagram = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (component: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY,
    });
    setSelectedComponent(component);
  };

  const handleMouseLeave = () => {
    setSelectedComponent(null);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Architecture</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Interactive system architecture diagram showing the relationships between different components.
        </p>
      </div>

      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 overflow-x-auto">
        <div className="min-w-[1200px] h-[800px] relative">
          {/* Components */}
          {Object.entries(components).map(([key, component]) => (
            <motion.div
              key={key}
              className={`absolute cursor-pointer ${component.color} rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700
                hover:shadow-lg transition-shadow duration-200`}
              style={getPositionForComponent(key)}
              onMouseEnter={(e) => handleMouseEnter(key, e)}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {component.title}
              </span>
            </motion.div>
          ))}

          {/* Connector Lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Add your connector lines here */}
            <line
              x1="150"
              y1="100"
              x2="300"
              y2="200"
              stroke="currentColor"
              className="text-gray-300 dark:text-gray-600"
              strokeWidth="2"
              strokeDasharray="4"
            />
            {/* Add more lines based on your diagram */}
          </svg>

          {/* Tooltip */}
          {selectedComponent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-w-xs"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y + 10,
              }}
            >
              <div className="flex items-start">
                <Info className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                    {components[selectedComponent].title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {components[selectedComponent].description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};