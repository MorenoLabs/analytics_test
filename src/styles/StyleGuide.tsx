import React from 'react';
import { BarChart4, AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

export const StyleGuide = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-white">Design System</h1>

      {/* Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Colors</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Primary */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-300">Primary</h3>
            <div className="space-y-2">
              <div className="h-12 bg-indigo-600 rounded-lg"></div>
              <div className="text-sm">
                <p className="font-medium text-gray-200">Indigo 600</p>
                <p className="text-gray-400">#4F46E5</p>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-300">Secondary</h3>
            <div className="space-y-2">
              <div className="h-12 bg-gray-800 rounded-lg border border-gray-700"></div>
              <div className="text-sm">
                <p className="font-medium text-gray-200">Gray 800</p>
                <p className="text-gray-400">#1F2937</p>
              </div>
            </div>
          </div>

          {/* Success */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-300">Success</h3>
            <div className="space-y-2">
              <div className="h-12 bg-green-500 rounded-lg"></div>
              <div className="text-sm">
                <p className="font-medium text-gray-200">Green 500</p>
                <p className="text-gray-400">#10B981</p>
              </div>
            </div>
          </div>

          {/* Error */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-300">Error</h3>
            <div className="space-y-2">
              <div className="h-12 bg-red-500 rounded-lg"></div>
              <div className="text-sm">
                <p className="font-medium text-gray-200">Red 500</p>
                <p className="text-gray-400">#EF4444</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Typography</h2>
        
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold text-white">Heading 1</h1>
            <p className="text-sm text-gray-400">text-4xl font-bold</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Heading 2</h2>
            <p className="text-sm text-gray-400">text-3xl font-bold</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Heading 3</h3>
            <p className="text-sm text-gray-400">text-2xl font-semibold</p>
          </div>
          <div>
            <h4 className="text-xl font-medium text-white">Heading 4</h4>
            <p className="text-sm text-gray-400">text-xl font-medium</p>
          </div>
          <div>
            <p className="text-base text-gray-200">Body Text</p>
            <p className="text-sm text-gray-400">text-base</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Small Text</p>
            <p className="text-sm text-gray-400">text-sm</p>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Components</h2>

        {/* Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Primary Button
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
              Secondary Button
            </button>
            <button className="px-4 py-2 border border-gray-600 text-gray-200 rounded-lg hover:bg-gray-800">
              Outline Button
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg opacity-50 cursor-not-allowed">
              Disabled Button
            </button>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Form Elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Input Field</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-600 bg-gray-800 p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Placeholder text"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Select Field</label>
              <select className="w-full rounded-lg border border-gray-600 bg-gray-800 p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Alerts</h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-indigo-500/20 border border-indigo-500 rounded-lg text-indigo-400">
              <Info className="h-5 w-5 mr-2" />
              <p>Information alert message</p>
            </div>
            <div className="flex items-center p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <p>Success alert message</p>
            </div>
            <div className="flex items-center p-4 bg-yellow-500/20 border border-yellow-500 rounded-lg text-yellow-400">
              <AlertCircle className="h-5 w-5 mr-2" />
              <p>Warning alert message</p>
            </div>
            <div className="flex items-center p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
              <XCircle className="h-5 w-5 mr-2" />
              <p>Error alert message</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <BarChart4 className="h-6 w-6 text-indigo-400 mr-2" />
                <h4 className="text-lg font-medium text-gray-200">Card Title</h4>
              </div>
              <p className="text-gray-300">
                Card content with description text that might span multiple lines.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <BarChart4 className="h-6 w-6 text-indigo-400 mr-2" />
                <h4 className="text-lg font-medium text-gray-200">Bordered Card</h4>
              </div>
              <p className="text-gray-300">
                Card content with description text that might span multiple lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Spacing System</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-indigo-500"></div>
            <p className="ml-2 text-sm text-gray-300">4px - Minimal spacing (0.25rem)</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-indigo-500"></div>
            <p className="ml-2 text-sm text-gray-300">6px - Compact spacing (0.375rem)</p>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-500"></div>
            <p className="ml-2 text-sm text-gray-300">8px - Default spacing (0.5rem)</p>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-500"></div>
            <p className="ml-2 text-sm text-gray-300">12px - Comfortable spacing (0.75rem)</p>
          </div>
        </div>
      </section>
    </div>
  );
};