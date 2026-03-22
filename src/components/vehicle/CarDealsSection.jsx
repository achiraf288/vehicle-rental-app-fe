import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Gauge, Settings, Heart, ArrowRight } from 'lucide-react';
import RentalPopup from './RentalPopup';
import { getDealVehicles } from '../../data/vehicles';

const carDeals = getDealVehicles();

export default function CarDealsSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleRentNow = (e, car) => {
    e.preventDefault();
    setSelectedCar(car);
    setShowPopup(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full inline-block backdrop-blur-sm border border-blue-100 shadow-lg">
                🔥 Hot Deals
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
                Popular Car
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
                Rentals
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
              From elegant sedans to powerful sports cars—carefully selected for the ultimate driving experience at unbeatable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up animation-delay-400">
            {carDeals.map((car, index) => (
              <div
                key={car.id}
                className="group bg-gradient-to-br from-white via-blue-50/50 to-white rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <div className="relative">
                  <Link to={`/vehicles/${car.id}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-white relative">
                      <div className="absolute top-3 right-3 z-10">
                        <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                          <Heart className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {car.discount}% OFF
                      </div>
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link to={`/vehicles/${car.id}`}>
                      <h3 className="font-bold text-gray-900 hover:text-blue-600 transition-colors text-lg mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        {car.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-blue-800">{car.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({car.reviews} reviews)</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-4 text-xs">
                      <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-lg p-2">
                        <Users className="w-3 h-3 text-blue-600" />
                        <span className="text-xs font-medium text-gray-700">{car.passengers}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-lg p-2">
                        <Settings className="w-3 h-3 text-blue-600" />
                        <span className="text-xs font-medium text-gray-700">{car.transmission}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-lg p-2">
                        <Gauge className="w-3 h-3 text-blue-600" />
                        <span className="text-xs font-medium text-gray-700">{car.speed}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-blue-100">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-gray-900">${car.price.toLocaleString()}</span>
                          <span className="text-sm text-gray-500">/ day</span>
                        </div>
                        <div className="text-xs text-green-600 font-medium mt-1">💰 Best Price</div>
                      </div>
                      <button
                        onClick={(e) => handleRentNow(e, car)}
                        className="group relative px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-1">
                          Rent Now
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-800">
            <Link
              to="/vehicles"
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl border-2 border-blue-200 text-blue-700 font-semibold hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">🚗</span>
                Show All Vehicles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {showPopup && selectedCar && (
        <RentalPopup selectedCar={selectedCar} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
