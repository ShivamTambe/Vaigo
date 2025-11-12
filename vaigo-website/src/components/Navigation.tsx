import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/vaigo-center', label: 'Vaigo Center' },
    { path: '/products', label: 'Products' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/technology', label: 'Technology' },
    { path: '/markets', label: 'Markets' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="flex items-center space-x-2 py-1">
  <div className="w-24 h-16 sm:w-28 sm:h-16 overflow-hidden bg-white flex items-center justify-center p-1">
    <img
      src="https://i.ibb.co/hx14vxwQ/logo-Vaigo.png"
      alt="Vaigo Logo"
      className="w-full h-full object-contain"
    />
  </div>
</div>




          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${location.pathname === item.path
                    ? 'text-green-600 font-semibold'
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 font-medium">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-100 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${location.pathname === item.path
                      ? 'text-green-600 bg-green-50 font-semibold'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 font-medium">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
