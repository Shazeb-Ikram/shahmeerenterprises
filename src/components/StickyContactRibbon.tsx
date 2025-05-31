
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

const StickyContactRibbon = () => {
  const [isMinimized, setIsMinimized] = useState(false);

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

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-rose-gold hover:bg-rose-gold/90 text-dark-charcoal p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Open contact options"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-charcoal/95 backdrop-blur-sm border-t-2 border-rose-gold shadow-2xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white font-medium text-sm md:text-base">
              Ready to start your manufacturing partnership?
            </span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handlePhoneClick}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 md:p-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-1 md:gap-2 text-sm md:text-base"
              aria-label="Call us"
            >
              <Phone size={16} className="md:w-5 md:h-5" />
              <span className="hidden sm:inline">Call</span>
            </button>
            
            <button
              onClick={handleEmailClick}
              className="bg-purple-600 hover:bg-purple-700 text-white p-2 md:p-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-1 md:gap-2 text-sm md:text-base"
              aria-label="Email us"
            >
              <Mail size={16} className="md:w-5 md:h-5" />
              <span className="hidden sm:inline">Email</span>
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white p-2 md:p-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-1 md:gap-2 text-sm md:text-base font-semibold"
              aria-label="WhatsApp us"
            >
              <MessageCircle size={16} className="md:w-5 md:h-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
            
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-white p-2 transition-colors duration-300"
              aria-label="Minimize contact ribbon"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyContactRibbon;
