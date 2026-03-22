import { Shield, DollarSign, Smartphone } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more."
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank."
  },
  {
    icon: Smartphone,
    title: "Convenient Online Booking",
    description: "With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime."
  }
];

export default function ServicesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full inline-block backdrop-blur-sm border border-blue-100 shadow-lg">
              Premium Services
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
              Our Services
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
              & Benefits
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Experience luxury car rental with our comprehensive services designed to provide you with the ultimate driving experience and peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group text-center p-10 rounded-3xl bg-gradient-to-br from-white via-blue-50/50 to-white border border-blue-100 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
                <service.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
