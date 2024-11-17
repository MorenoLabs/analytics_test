import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart4, 
  Users, 
  TrendingUp, 
  Shield, 
  ArrowRight, 
  Clock, 
  Target, 
  LineChart,
  Brain,
  Zap,
  CheckCircle
} from 'lucide-react';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart4 className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-2xl font-bold text-white">
              Analytics Hub
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                {" "}Customer Service{" "}
              </span>
              Analytics
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Harness the power of AI-driven insights to optimize your customer service performance,
              predict trends, and make data-driven decisions in real-time.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#features"
                className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">30%</h3>
              <p className="text-gray-400">Average Efficiency Increase</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">2.5x</h3>
              <p className="text-gray-400">Faster Response Times</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-400">Customer Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Comprehensive Analytics Suite
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to optimize your customer service operations and deliver
            exceptional customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: LineChart,
              title: 'Real-time Analytics',
              description: 'Monitor key metrics and KPIs in real-time with interactive dashboards.',
              color: 'text-blue-500',
            },
            {
              icon: Brain,
              title: 'AI-Powered Predictions',
              description: 'Leverage machine learning to forecast trends and prevent issues.',
              color: 'text-purple-500',
            },
            {
              icon: Users,
              title: 'Team Performance',
              description: 'Track individual and team metrics with detailed insights.',
              color: 'text-green-500',
            },
            {
              icon: Target,
              title: 'Resource Allocation',
              description: 'Optimize staff scheduling and resource distribution.',
              color: 'text-red-500',
            },
            {
              icon: Zap,
              title: 'Automated Insights',
              description: 'Get automated recommendations for performance improvement.',
              color: 'text-yellow-500',
            },
            {
              icon: Shield,
              title: 'Predictive Analytics',
              description: 'Stay ahead with advanced forecasting and trend analysis.',
              color: 'text-indigo-500',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
            >
              <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started in minutes and transform your customer service analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Connect Your Data',
              description: 'Easily integrate with your existing customer service platforms',
            },
            {
              step: '02',
              title: 'Analyze & Learn',
              description: 'Get instant insights and actionable recommendations',
            },
            {
              step: '03',
              title: 'Optimize & Improve',
              description: 'Implement changes and track improvements in real-time',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="text-4xl font-bold text-indigo-500 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <div className="space-y-4">
              {[
                'Real-time performance monitoring',
                'AI-powered predictive analytics',
                'Custom KPI tracking and alerts',
                'Team efficiency optimization',
                'Resource allocation insights',
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mr-2" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
              alt="Analytics Dashboard"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500"
              alt="Team Performance"
              className="rounded-lg mt-8"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that use Analytics Hub to deliver
            exceptional customer experiences through data-driven decisions.
          </p>
          <Link
            to="/signup"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center text-lg font-semibold"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Analytics Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};