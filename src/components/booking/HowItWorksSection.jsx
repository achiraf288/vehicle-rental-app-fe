import { Search, CalendarCheck, Car, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse and select",
    description: "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best."
  },
  {
    icon: CalendarCheck,
    title: "Book and Confirm",
    description: "Book your desired car with just a few clicks and receive an instant confirmation via email or SMS."
  },
  {
    icon: Car,
    title: "Enjoy your ride",
    description: "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service."
  },
  {
    icon: CheckCircle,
    title: "Return with ease",
    description: "Return the car at any of our convenient locations. Our team will handle the rest."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full inline-block backdrop-blur-sm border border-blue-100 shadow-lg">
              Simple Process
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
              How It
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
              Works
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up animation-delay-400">
          {steps.map((step, index) => (
            <div key={step.title} className="relative animate-fade-in" style={{ animationDelay: `${400 + index * 150}ms` }}>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-300" />
              )}
              
              <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-white rounded-3xl p-8 border border-blue-100 text-center hover:shadow-2xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-white rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
