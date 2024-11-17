import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, AlertCircle } from 'lucide-react';

export const UserManagement = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleEmailUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setSuccess('');
      setLoading(true);
      await currentUser?.updateEmail(newEmail);
      setSuccess('Email updated successfully!');
      setNewEmail('');
    } catch (err) {
      setError('Failed to update email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setSuccess('');
      setLoading(true);
      await currentUser?.updatePassword(newPassword);
      setSuccess('Password updated successfully!');
      setNewPassword('');
    } catch (err) {
      setError('Failed to update password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      setError('Failed to log out');
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded-lg flex items-center text-red-500">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-500/10 border border-green-500 rounded-lg flex items-center text-green-500">
          <AlertCircle className="h-5 w-5 mr-2" />
          {success}
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Current Email</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{currentUser?.email}</p>

        <form onSubmit={handleEmailUpdate} className="space-y-4">
          <div>
            <label htmlFor="new-email" className="block text-sm font-medium mb-2">
              New Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="new-email"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2.5"
                placeholder="New email address"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading || !newEmail}
            className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Update Email
          </button>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium mb-4">Change Password</h3>
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2.5"
                placeholder="New password"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading || !newPassword}
            className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};