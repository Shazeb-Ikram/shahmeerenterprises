import React from 'react';
import { Instagram, Facebook, Mail, MessageCircle, MapPin, Phone, Globe } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about your manufacturing services.");
    window.open(`https://wa.me/+9232163385642?text=${message}`, '_blank');
  };
  return <footer className="bg-dark-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img src="/lovable-uploads/7957e9b5-3dc9-4a0d-8385-e415791d2d6c.png" alt="Shahmeer Enterprises" className="h-24 w-auto mb-4 filter brightness-0 invert" />
            <p className="mb-6 leading-relaxed text-zinc-950">
              Your trusted partner in premium cosmetics manufacturing. We specialize in creating 
              bespoke beauty solutions for retailers, spas, and beauty brands worldwide with 
              uncompromising quality and ethical practices.
            </p>
            <div className="flex items-center gap-4">
              <button onClick={handleWhatsAppClick} className="text-white hover:text-rose-gold transition-colors duration-300 p-2 rounded-full hover:bg-rose-gold/10" aria-label="WhatsApp Business">
                <MessageCircle size={24} />
              </button>
              <a href="https://instagram.com/shahmeerenterprises" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-gold transition-colors duration-300 p-2 rounded-full hover:bg-rose-gold/10" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/shahmeerenterprises" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-gold transition-colors duration-300 p-2 rounded-full hover:bg-rose-gold/10" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="mailto:info@shahmeerenterprises.com" className="text-white hover:text-rose-gold transition-colors duration-300 p-2 rounded-full hover:bg-rose-gold/10" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-rose-gold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#capabilities" className="hover:text-rose-gold transition-colors duration-300">
                  Skincare Manufacturing
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-rose-gold transition-colors duration-300">
                  Makeup Production
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-rose-gold transition-colors duration-300">
                  Haircare Solutions
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-rose-gold transition-colors duration-300">
                  Custom Formulation
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-rose-gold transition-colors duration-300">
                  Private Labeling
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-rose-gold transition-colors duration-300">
                  Packaging Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-rose-gold">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#trust" className="hover:text-rose-gold transition-colors duration-300">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#stats" className="hover:text-rose-gold transition-colors duration-300">
                  Production Capacity
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-gold transition-colors duration-300">
                  Partnership Inquiry
                </a>
              </li>
              <li>
                <a href="/investor" className="hover:text-rose-gold transition-colors duration-300">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-gold transition-colors duration-300">
                  Export Documentation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-gold transition-colors duration-300">
                  Quality Assurance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin size={20} className="text-rose-gold flex-shrink-0" />
              <div className="text-sm text-gray-300">
                A-183, Block 8, KEACHS<br />
                Karachi, Pakistan
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone size={20} className="text-rose-gold flex-shrink-0" />
              <div className="text-sm text-gray-300">
                +92 321 6338 5642<br />
                Available 9 AM - 6 PM (PKT)
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail size={20} className="text-rose-gold flex-shrink-0" />
              <div className="text-sm text-gray-300">
                info@shahmeerenterprises.com<br />
                Manufacturing Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2012 Shahmeer Enterprises. All rights reserved. | GMP & ISO Certified Manufacturing
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-rose-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-rose-gold transition-colors duration-300">
                Quality Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;