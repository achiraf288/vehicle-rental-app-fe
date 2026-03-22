import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, ChevronRight } from 'lucide-react';
import heroPorsche from '../assets/images/hero-porsche.jpg';
import ferrariLogo from '../assets/logo/ferrari.svg';
import mercedesLogo from '../assets/logo/mercedes.svg';
import bmwLogo from '../assets/logo/bmw.svg';
import bentleyLogo from '../assets/logo/bentley.svg';
import jaguarLogo from '../assets/logo/jaguar.svg';
import chevroletLogo from '../assets/logo/chevrolet.svg';
import FleetSection from '../components/vehicle/FleetSection';
import BookingForm from '../components/booking/BookingForm';
import CarDealsSection from '../components/vehicle/CarDealsSection';
import HowItWorksSection from '../components/booking/HowItWorksSection';
import ServicesSection from '../components/booking/ServicesSection';
import TestimonialsSection from '../components/booking/TestimonialsSection';

const brandLogos = [
  { name: 'Ferrari', logo: ferrariLogo },
  { name: 'Mercedes', logo: mercedesLogo },
  { name: 'BMW', logo: bmwLogo },
  { name: 'Bentley', logo: bentleyLogo },
  { name: 'Jaguar', logo: jaguarLogo },
  { name: 'Chevrolet', logo: chevroletLogo },
];

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#features') {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-transparent to-blue-100/30 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-transparent to-blue-100/20 animate-gradient-shift" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
            <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full inline-block backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  🚗 Luxury Car Experience
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift inline-block transform hover:scale-105 transition-transform duration-300">
                  Drive Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent animate-gradient-shift inline-block transform hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                  Dream Car
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient-shift inline-block transform hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '200ms' }}>
                  Today in Sri Lanka
                </span>
              </h1>
              <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed text-lg animate-fade-in-up animation-delay-200 transform hover:translate-x-2 transition-transform duration-500">
                Experience the ultimate luxury with our premium fleet. From sports cars to luxury sedans, we deliver unforgettable driving experiences across the island.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-400">
                <Link
                  to="/booking"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-500 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="transform hover:rotate-12 transition-transform duration-300">✨</span>
                    Reserve Your Ride
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <a
                  href="#fleet"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-blue-200 text-blue-700 font-medium hover:border-blue-400 hover:text-blue-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg transform hover:rotate-12 transition-transform duration-300">🎯</span>
                    Explore Fleet
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-600">
              <div className="relative group">
                <div className="absolute -inset-12 bg-gradient-to-br from-blue-400/30 via-blue-300/20 to-transparent rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700 animate-float" />
                <div className="relative bg-gradient-to-br from-white via-blue-50/70 to-white rounded-3xl p-10 shadow-2xl border border-blue-100 group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-3 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300">
                    🔥 Premium
                  </div>
                  <img
                    src={heroPorsche}
                    alt="Luxury Porsche Sports Car"
                    className="w-full max-w-md object-contain relative z-10 filter drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-4 right-4 bg-gradient-to-r from-blue-50 to-white/90 backdrop-blur-sm rounded-xl p-3 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 transform hover:scale-125 transition-transform duration-300">⭐</span>
                        <span className="text-sm font-semibold text-gray-800">4.9/5 Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-blue-600 transform hover:scale-125 transition-transform duration-300">💎</span>
                        <span className="text-sm font-medium text-blue-800">Luxury Class</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-2xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full opacity-15 blur-2xl animate-pulse animation-delay-1000" />
                <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-white to-blue-100 rounded-full opacity-30 blur-xl animate-float animation-delay-2000" />
              </div>
            </div>
          </div>

          <div className="mt-20 mb-20 flex flex-wrap justify-center items-center gap-6 animate-fade-in-up animation-delay-800">
            <div className="text-center w-full mb-4 transform hover:scale-105 transition-transform duration-300">
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">Trusted by World's Leading Brands</p>
            </div>
            {brandLogos.map((brand, index) => (
              <div
                key={brand.name}
                className="group relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-2xl hover:border-blue-300 hover:bg-gradient-to-br hover:from-white hover:to-blue-100 transition-all duration-500 transform hover:-translate-y-3 hover:scale-110 animate-fade-in"
                style={{ 
                  animationDelay: `${800 + index * 150}ms`
                }}
                title={brand.name}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-200/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src={brand.logo} alt={brand.name} className="w-12 h-12 object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium text-blue-700 bg-white px-2 py-1 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
            <Link
              to="/vehicles"
              className="group relative w-20 h-20 flex items-center justify-center rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white text-blue-600 hover:text-blue-800 transition-all duration-500 transform hover:-translate-y-3 hover:scale-110 shadow-lg hover:shadow-2xl animate-fade-in animation-delay-1700 overflow-hidden"
              aria-label="View all brands"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-500" />
                <span className="text-xs font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  All Brands
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* <div id="booking-form">
        <BookingForm />
      </div> */}
      <FleetSection />
      <CarDealsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ServicesSection />
    </>
  );
}
