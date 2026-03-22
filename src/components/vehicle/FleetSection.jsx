import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart } from 'lucide-react';
import { vehicles, categories } from '../../data/vehicles';

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  const featured = filtered.slice(0, 3);
  const rest = filtered.slice(3, 7);

  return (
    <section id="fleet" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full inline-block backdrop-blur-sm border border-blue-100 shadow-lg">
              🚗 Premium Vehicle Collection
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
              Our Luxury
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
              Vehicle Fleet
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Experience the ultimate driving pleasure with our carefully curated collection of premium vehicles, designed to exceed your expectations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-400">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-fade-in overflow-hidden ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl shadow-blue-500/30'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-blue-200 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white'
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {cat === 'All' && <span>🎯</span>}
                {cat === 'Luxury' && <span>💎</span>}
                {cat === 'Sports' && <span>🏎️</span>}
                {cat === 'SUV' && <span>🚙</span>}
                {cat === 'Sedan' && <span>🚗</span>}
                {cat}
              </span>
              {activeCategory === cat && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-600">
          {(featured.length ? featured : filtered.slice(0, 3)).map((v, index) => (
            <Link
              key={v.id}
              to={`/vehicles/${v.id}`}
              className="group relative bg-gradient-to-br from-white via-blue-50/50 to-white rounded-3xl overflow-hidden border border-blue-100 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              <div className="absolute top-4 right-4 z-10">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {v.category}
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-lg">{v.name}</h3>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-medium">4.8</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-3">{v.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 font-semibold">From ${v.price}/day</span>
                  <div className="flex items-center gap-1 text-white/60 text-xs">
                    <span>👤 4</span>
                    <span>⚡ Auto</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 animate-fade-in-up animation-delay-800">
          {rest.slice(0, 4).map((v, index) => (
            <Link
              key={v.id}
              to={`/vehicles/${v.id}`}
              className="group bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-100 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-blue-700">
                  {v.category}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-bold text-gray-900 text-sm truncate">{v.name}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-gray-600">4.7</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-2">{v.category}</p>
                <p className="text-blue-600 font-semibold text-sm">From ${v.price}/day</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
          <Link
            to="/vehicles"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl border-2 border-blue-200 text-blue-700 font-semibold hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-lg">🎯</span>
              Explore All Vehicles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
