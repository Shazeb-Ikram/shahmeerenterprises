
import React from 'react';
import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';

const SocialMediaBar = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in bulk order inquiry for cosmetics manufacturing. Please provide more details.");
    window.open(`https://wa.me/+923001234567?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@shahmeer.com?subject=Bulk Order Inquiry', '_blank');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-dark-charcoal/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="text-rose-gold font-playfair font-semibold text-lg">
            Shahmeer Enterprises
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleWhatsAppClick}
              className="text-white hover:text-rose-gold transition-colors duration-300 p-2 rounded-full hover:bg-rose-gold/10"
              aria-label="WhatsApp Business"
            >
              <MessageCircle size={20} />
            </button>
            <a
              href="https://instagram.com/shahmeerenterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-rose-gold transition-colors duration-300 p-2 rounded-full hover:bg-rose-gold/10"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/shahmeerenterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-rose-gold transition-colors duration-300 p-2 rounded-full hover:bg-rose-gold/10"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <button
              onClick={handleEmailClick}
              className="text-white hover:text-rose-gold transition-colors duration-300 p-2 rounded-full hover:bg-rose-gold/10"
              aria-label="Email"
            >
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBar;
