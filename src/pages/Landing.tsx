import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart4, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart4 className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-2xl font-bold text-white">
              Analytics Shit
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Customer Service
            <span className="text-indigo-500"> Analytics</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Powerful insights, predictive analytics, and real-time monitoring to
            elevate your customer service performance to new heights.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
            >
              Get Started
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

      {/* Features Section */}
      <div
        id="features"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400">
            Everything you need to optimize your customer service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'Real-time Analytics',
              description:
                'Monitor key metrics in real-time and make data-driven decisions instantly.',
            },
            {
              icon: Users,
              title: 'Team Performance',
              description:
                'Track individual and team performance with detailed insights and trends.',
            },
            {
              icon: Shield,
              title: 'Predictive Insights',
              description:
                'Anticipate customer needs and optimize resource allocation with AI-powered predictions.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <feature.icon className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that use Analytics Hub to transform
            their customer service operations.
          </p>
          <Link
            to="/signup"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
