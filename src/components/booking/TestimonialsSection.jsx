import { Star } from "lucide-react";

import carMercedes from "../../assets/images/car-mercedes.jpg";
import carBMW from "../../assets/images/car-bmw.jpg";
import carLamborghini from "../../assets/images/car-lamborghini.jpg";


const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Corporate Executive",
    avatar: "SW",
    rating: 5,
    quote:
      "Outstanding service from start to finish! The booking process was seamless, and the luxury vehicle exceeded my expectations. Will definitely rent again!",
    image: carMercedes,
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Travel Enthusiast",
    avatar: "MT",
    rating: 5,
    quote:
      "Exceptional experience with premium vehicle selection and customer support. The car was immaculate and the entire process was incredibly smooth.",
    image: carBMW,
  },
  {
    id: 3,
    name: "Isabella Rodriguez",
    role: "Luxury Connoisseur",
    avatar: "IR",
    rating: 5,
    quote:
      "Premium car rental at its finest! From the seamless pickup process to the exceptional vehicle quality, every detail was perfect.",
    image: carLamborghini,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full inline-block backdrop-blur-sm border border-blue-100 shadow-lg">
              Customer Reviews
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
              What Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
              Clients Say
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Discover why our customers consistently rate us 5 stars for exceptional service and premium vehicle quality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="group bg-gradient-to-br from-white via-blue-50/50 to-white rounded-3xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-2 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-6xl text-blue-200 font-serif opacity-20">"</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic pl-6">{t.quote}</p>
                <div className="absolute -bottom-2 -right-2 text-6xl text-blue-200 font-serif opacity-20">"</div>
              </div>

              {/* Car Image */}
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                <img
                  src={t.image}
                  alt="Luxury rental car"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
