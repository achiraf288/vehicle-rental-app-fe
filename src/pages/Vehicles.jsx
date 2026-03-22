import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import VehicleCard from '../components/vehicle/VehicleCard';
import { vehicles, categories } from '../data/vehicles';

export default function Vehicles() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = category === 'All' ? vehicles : vehicles.filter((v) => v.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [category, search]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full inline-block backdrop-blur-sm border border-blue-100 shadow-lg">
              🚗 Vehicle Collection
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
              Our Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
              Fleet
            </span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Choose from premium sedans, sports cars, and SUVs. All vehicles are maintained to the highest standards with luxury features.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-400">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              type="text"
              placeholder="Search luxury vehicles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 transition-all duration-300"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`group relative px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in overflow-hidden ${
                  category === cat
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl shadow-blue-500/30'
                    : 'bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-gray-700 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cat === 'All' && <span>🎯</span>}
                  {cat === 'Luxury' && <span>💎</span>}
                  {cat === 'Sports' && <span>🏎️</span>}
                  {cat === 'SUV' && <span>🚙</span>}
                  {cat === 'Sedan' && <span>🚗</span>}
                  {cat}
                </span>
                {category === cat && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-blue-200 animate-fade-in-up">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-50 to-white rounded-full flex items-center justify-center shadow-lg">
              <Search className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-gray-600 text-lg mb-4">No vehicles match your search criteria.</p>
            <p className="text-gray-500 text-sm">Try adjusting your filters or browse our complete collection.</p>
            <button
              onClick={() => { setSearch(''); setCategory('All'); }}
              className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
            {filtered.map((v, index) => (
              <VehicleCard key={v.id} vehicle={v} animationDelay={`${600 + index * 100}ms`} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
