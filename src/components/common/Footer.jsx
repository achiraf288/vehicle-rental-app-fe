import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Clock, Phone, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/', internal: true },
    { label: 'Our Services', href: '/#features', internal: true },
    { label: 'Career', href: '#', internal: false },
  ],
  services: [
    { label: 'Airport Transfers', href: '/booking', internal: true },
    { label: 'Ride Hailing', href: '/vehicles', internal: true },
    { label: 'Corporate Accounts', href: '/booking', internal: true },
    { label: 'Hourly Rentals', href: '/vehicles', internal: true },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

function FooterLink({ link }) {
  const className = 'text-white/70 hover:text-blue-300 text-sm transition-colors duration-300 transform hover:translate-x-1';
  if (link.internal) {
    return <Link to={link.href} className={className}>{link.label}</Link>;
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {link.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900/95 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 via-transparent to-blue-800/20 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="animate-fade-in-up">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="font-bold text-lg">Velocity<span className="text-blue-400">Rentals</span></span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
              Premium car rental service with partners in each region. We connect you to luxury vehicles for meetings, events, holidays, and whenever you need us.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s, index) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-blue-600/30 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4 group-hover:text-blue-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="font-bold mb-6 text-white text-lg bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={link.label} className="animate-fade-in" style={{ animationDelay: `${200 + index * 50}ms` }}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="font-bold mb-6 text-white text-lg bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={link.label} className="animate-fade-in" style={{ animationDelay: `${400 + index * 50}ms` }}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-600">
            <h4 className="font-bold mb-6 text-white text-lg bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Clock className="w-5 h-5 mt-1 text-blue-400/80 shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <div>
                  <p className="text-sm font-medium">9 AM – 5 PM, Monday – Saturday</p>
                  <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">Support & Sales available</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Phone className="w-5 h-5 text-blue-400/80 shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-sm font-medium group-hover:text-blue-200 transition-colors duration-300">070 457 5314</span>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Mail className="w-5 h-5 text-blue-400/80 shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-sm font-medium group-hover:text-blue-200 transition-colors duration-300">support@VelocityRentals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 animate-fade-in-up animation-delay-800">
          <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
            © {new Date().getFullYear()} VelocityRentals • Premium Vehicle Rental
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-blue-300 text-sm transition-colors duration-300 transform hover:translate-y-[-2px]">
              Terms of Use
            </a>
            <a href="#" className="text-white/50 hover:text-blue-300 text-sm transition-colors duration-300 transform hover:translate-y-[-2px]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
