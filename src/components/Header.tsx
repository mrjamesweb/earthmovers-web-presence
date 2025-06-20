
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      {/* Enhanced top bar with gradient */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-900 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 group">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="hover:text-orange-300 transition-colors">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="hover:text-orange-300 transition-colors">info@buildtech.com</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="hover:text-orange-300 transition-colors">Building City, BC</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-200 animate-pulse">
                🏆 Licensed & Insured | 24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced main navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/home" className="flex items-center group">
            <div className="text-3xl font-bold text-slate-800 transition-all duration-300 group-hover:scale-105">
              Build<span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">Tech</span>
            </div>
          </Link>

          {/* Enhanced desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-all duration-300 group py-2 ${
                  isActiveRoute(item.href) 
                    ? 'text-orange-500' 
                    : 'text-slate-700 hover:text-orange-500'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ${
                  isActiveRoute(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Enhanced mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-orange-500 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-6 bg-slate-50 rounded-lg p-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 hover:translate-x-2 ${
                    isActiveRoute(item.href)
                      ? 'text-orange-500'
                      : 'text-slate-700 hover:text-orange-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-fit shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
