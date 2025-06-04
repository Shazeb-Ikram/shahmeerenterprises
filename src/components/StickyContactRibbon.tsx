
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, X, Zap } from 'lucide-react';

const StickyContactRibbon = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setPulseCount(prev => prev + 1);
    }, 3000);
    return () => clearInterval(pulseTimer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in discussing a bulk order for cosmetics manufacturing.");
    window.open(`https://wa.me/+9232163385642?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@shahmeerenterprises.com?subject=Manufacturing Inquiry', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+9232163385642', '_blank');
  };

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
        <button
          onClick={() => setIsMinimized(false)}
          className="ultra-premium-button text-deep-brown p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 relative group"
          aria-label="Open contact options"
        >
          <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <Zap className="absolute -top-1 -left-1 text-warm-gold animate-pulse opacity-70" size={16} />
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-deep-brown via-deep-brown/95 to-deep-brown backdrop-blur-md border-t-2 border-warm-gold shadow-2xl">
        {/* Animated border */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-warm-gold via-soft-pink to-soft-peach animate-gradient-shift"></div>
        
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse relative">
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <Zap size={16} className="text-warm-gold animate-pulse" />
              </div>
              <span className="text-white font-medium text-sm md:text-base animate-fade-in">
                Ready to start your manufacturing partnership?
              </span>
              <div className="hidden md:flex items-center gap-1 text-warm-gold animate-pulse">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-warm-gold rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={handlePhoneClick}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-2 md:p-3 rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-1 md:gap-2 text-sm md:text-base group relative overflow-hidden"
                aria-label="Call us"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <Phone size={16} className="md:w-5 md:h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline relative z-10">Call</span>
              </button>
              
              <button
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-2 md:p-3 rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-1 md:gap-2 text-sm md:text-base group relative overflow-hidden"
                aria-label="Email us"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <Mail size={16} className="md:w-5 md:h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden sm:inline relative z-10">Email</span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="ultra-premium-button text-white p-2 md:p-3 rounded-lg transition-all duration-500 transform hover:scale-110 flex items-center gap-1 md:gap-2 text-sm md:text-base font-semibold group relative"
                style={{ background: 'linear-gradient(45deg, #25D366, #128C7E, #075E54)' }}
                aria-label="WhatsApp us"
              >
                <MessageCircle size={16} className="md:w-5 md:h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline relative z-10">WhatsApp</span>
                {pulseCount % 3 === 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce">
                    <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-warm-gold p-2 transition-all duration-500 hover:scale-110 hover:rotate-90 group"
                aria-label="Minimize contact ribbon"
              >
                <X size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyContactRibbon;
