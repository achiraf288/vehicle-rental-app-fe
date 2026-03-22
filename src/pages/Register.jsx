import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, UserPlus } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setError('Please enter a password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-24 pb-16 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 animate-pulse" />
      <div className="w-full max-w-md mx-auto px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-blue-200/50 shadow-2xl shadow-blue-200/50 p-8 animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full mb-4 backdrop-blur-sm border border-blue-100 shadow-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700">Join VelocityRentals</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
                Create Account
              </span>
            </h1>
            <p className="text-gray-600 text-sm">Join VelocityRentals to book premium vehicles</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 to-red-100 text-red-700 text-sm border border-red-200 animate-fade-in">
                {error}
              </div>
            )}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" /> Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 transition-all duration-300"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" /> Email Address
              </label>
              <input
                type="email"
                placeholder="you@velocityrentals.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 transition-all duration-300"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600" /> Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 transition-all duration-300"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600" /> Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              <UserPlus className="w-5 h-5" /> Sign Up
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-4">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-bold hover:text-blue-700 transition-colors duration-300 transform hover:scale-105 inline-block">
                Sign In
              </Link>
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>Secure Registration</span>
              </div>
              <div className="flex items-center gap-1">
                <UserPlus className="w-3 h-3" />
                <span>Quick Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
