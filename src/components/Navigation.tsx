
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Our Products' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7957e9b5-3dc9-4a0d-8385-e415791d2d6c.png" 
              alt="Shahmeer Enterprises" 
              className="h-16 w-auto md:h-20 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 relative ${
                  location.pathname === link.path
                    ? 'text-warm-gold'
                    : 'text-deep-brown hover:text-warm-gold'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-warm-gold rounded-full" />
                )}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-warm-gold to-warm-gold/90 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-deep-brown hover:bg-soft-peach/50 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-warm-gold'
                      : 'text-deep-brown hover:text-warm-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-warm-gold to-warm-gold/90 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
