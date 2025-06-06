
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
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/fe299903-57d3-46c7-bed5-a1c84f30728a.png" 
              alt="Shahmeer Ent" 
              className="h-12 w-auto md:h-16 group-hover:scale-110 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 relative hover:scale-105 ${
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
              className="bg-gradient-to-r from-warm-gold to-soft-pink text-white px-6 py-2 rounded-full font-medium hover:shadow-xl hover:scale-105 hover:from-warm-gold/90 hover:to-soft-pink/90 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-deep-brown hover:bg-soft-peach hover:scale-110 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-white/20 professional-transition">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 ${
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
                className="block w-full bg-gradient-to-r from-warm-gold to-soft-pink text-white py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 hover:from-warm-gold/90 hover:to-soft-pink/90 transition-all duration-300 text-center"
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
