import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Sidebar } from './components/Sidebar';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { KPISimulation } from './pages/KPISimulation';
import { StaffingAnalysis } from './pages/StaffingAnalysis';
import { ResourceAllocation } from './pages/ResourceAllocation';
import { MetricMapping } from './pages/MetricMapping';
import { Predictions } from './pages/Predictions';
import { UserManagement } from './pages/UserManagement';
import { Settings } from './pages/Settings';
import { StyleGuide } from './styles/StyleGuide';
import { TechnicalDiagram } from './pages/TechnicalDiagram';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/style-guide" element={<StyleGuide />} />
            
            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <Dashboard />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/kpi-simulation"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <KPISimulation />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/staffing-analysis"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <StaffingAnalysis />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/resource-allocation"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <ResourceAllocation />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/metric-mapping"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <MetricMapping />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/predictions"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <Predictions />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/technical-diagram"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <TechnicalDiagram />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-management"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <UserManagement />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                    <Sidebar />
                    <div className="flex-1 ml-64">
                      <Settings />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;