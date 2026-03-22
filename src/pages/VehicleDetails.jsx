import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Star,
  Users,
  Gauge,
  Settings,
  Fuel,
  Snowflake,
  ArrowLeft,
} from 'lucide-react';
import { getVehicleById } from '../data/vehicles';
import RentalPopup from '../components/vehicle/RentalPopup';

export default function VehicleDetails() {
  const { id } = useParams();
  const vehicle = getVehicleById(id);
  const [showPopup, setShowPopup] = useState(false);

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-2xl font-bold text-gray-900">Vehicle not found</h1>
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-2 mt-4 text-emerald-600 font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to fleet
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          to="/vehicles"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium mb-8 transition-colors duration-300 transform hover:translate-x-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-blue-200/50 shadow-2xl animate-fade-in-up">
            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-white">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full backdrop-blur-sm border border-blue-100 shadow-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-blue-700">{vehicle.category}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-white rounded-full backdrop-blur-sm border border-green-100 shadow-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-green-700">Available</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
                {vehicle.name}
              </span>
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                <span className="text-lg font-bold text-gray-900">{vehicle.rating}</span>
              </div>
              <span className="text-gray-600">({vehicle.reviews} reviews)</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {vehicle.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Users className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Passengers</p>
                  <p className="font-bold text-gray-900">{vehicle.passengers} seats</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Settings className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Transmission</p>
                  <p className="font-bold text-gray-900">{vehicle.transmission}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Gauge className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Top speed</p>
                  <p className="font-bold text-gray-900">{vehicle.speed}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Fuel className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Fuel</p>
                  <p className="font-bold text-gray-900">Petrol</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  ${vehicle.price.toLocaleString()}
                </span>
                <span className="text-gray-500">/ day</span>
              </div>
              <button
                onClick={() => setShowPopup(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40"
              >
                Rent Now
              </button>
              <Link
                to="/booking"
                className="px-8 py-4 rounded-2xl border-2 border-blue-200 text-blue-700 font-bold hover:border-blue-500 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Custom Booking
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <RentalPopup selectedCar={vehicle} onClose={() => setShowPopup(false)} />
      )}
    </main>
  );
}
