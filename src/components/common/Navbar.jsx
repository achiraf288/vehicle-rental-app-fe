import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, User, UserPlus, Car } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-sm text-white rounded-xl flex items-center justify-center font-bold shadow-lg group-hover:from-blue-600/90 group-hover:to-blue-700/90 transition-all duration-300 transform hover:scale-110 border border-white/20">
              <Car className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">
              Velocity<span className="text-blue-600">Rentals</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <button
              onClick={() => navigate('/')}
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm"
            >
              Home
            </button>
            <Link to="/vehicles" className="text-sm font-medium hover:text-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              Cars
            </Link>
            <Link to="/booking" className="text-sm font-medium hover:text-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              Book Now
            </Link>
            <Link
              to="/#features"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm"
            >
              Features
            </Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              Dashboard
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-gray-700 hover:bg-white/20 hover:border-blue-300/50 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
            >
              <User className="w-4 h-4 group-hover:text-blue-600 transition-colors duration-300" />
              Login
            </Link>
            <Link
              to="/register"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-sm text-white hover:from-blue-600/90 hover:to-blue-700/90 transition-all duration-300 transform hover:scale-105 text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 border border-white/20"
            >
              <UserPlus className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              Sign Up
            </Link>
          </div>

          <button
            className="md:hidden p-2.5 rounded-lg text-gray-700 hover:bg-white/20 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20 flex flex-col gap-1 animate-fade-in bg-white/10 backdrop-blur-xl">
            <button
              onClick={() => { navigate('/'); setIsOpen(false); }}
              className="px-4 py-3 text-left text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Home
            </button>
            <Link to="/vehicles" onClick={() => setIsOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Cars
            </Link>
            <Link to="/booking" onClick={() => setIsOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Book Now
            </Link>
            <Link
              to="/#features"
              onClick={(e) => {
                setIsOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-3 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Features
            </Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Dashboard
            </Link>
            <div className="border-t border-white/20 mt-2 pt-2 flex flex-col gap-1">
              <Link to="/login" onClick={() => setIsOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 backdrop-blur-sm">
                <User className="w-4 h-4" /> Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="mx-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-sm text-white text-center font-medium shadow-lg shadow-blue-500/30 hover:from-blue-600/90 hover:to-blue-700/90 transition-all duration-300 border border-white/20">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
