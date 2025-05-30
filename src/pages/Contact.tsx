
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    orderVolume: '',
    productInterest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in discussing a bulk order for cosmetics manufacturing.");
    window.open(`https://wa.me/+923001234567?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@shahmeer.com?subject=Manufacturing Inquiry', '_blank');
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto slide-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-5 h-5 text-warm-gold" />
              <span className="text-sm font-medium text-deep-brown">Get In Touch</span>
            </div>
            
            <h1 className="font-cormorant text-4xl md:text-6xl font-bold text-deep-brown mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-deep-brown/80 max-w-2xl mx-auto">
              Ready to bring your cosmetics vision to life? Let's discuss your manufacturing needs and create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="font-cormorant text-3xl font-bold text-deep-brown mb-2">
                  Send Us a Message
                </h2>
                <p className="text-deep-brown/70 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Order Volume *
                      </label>
                      <select
                        name="orderVolume"
                        value={formData.orderVolume}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Volume</option>
                        <option value="500-1000">500 - 1,000 units</option>
                        <option value="1000-5000">1,000 - 5,000 units</option>
                        <option value="5000-10000">5,000 - 10,000 units</option>
                        <option value="10000+">10,000+ units</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Product Interest
                      </label>
                      <select
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Product</option>
                        <option value="nail-polish-remover">Nail Polish Remover Wipes</option>
                        <option value="custom-formulation">Custom Formulation</option>
                        <option value="private-labeling">Private Labeling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-warm-gold to-soft-pink text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="slide-in-right">
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-soft-peach/30 to-soft-pink/20 rounded-3xl p-8">
                  <h3 className="font-cormorant text-2xl font-bold text-deep-brown mb-6">
                    Quick Contact
                  </h3>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={handleWhatsAppClick}
                      className="w-full flex items-center gap-4 p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <div className="text-left">
                        <div className="font-semibold">WhatsApp Business</div>
                        <div className="text-sm opacity-90">+92 300 1234567</div>
                      </div>
                    </button>

                    <button 
                      onClick={handleEmailClick}
                      className="w-full flex items-center gap-4 p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-6 h-6" />
                      <div className="text-left">
                        <div className="font-semibold">Email Us</div>
                        <div className="text-sm opacity-90">info@shahmeer.com</div>
                      </div>
                    </button>

                    <div className="flex items-center gap-4 p-4 bg-warm-gold/20 rounded-xl">
                      <Phone className="w-6 h-6 text-warm-gold" />
                      <div>
                        <div className="font-semibold text-deep-brown">Phone</div>
                        <div className="text-sm text-deep-brown/70">+92 300 1234567</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Info */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="font-cormorant text-2xl font-bold text-deep-brown mb-6">
                    Office Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-warm-gold mt-1" />
                      <div>
                        <div className="font-semibold text-deep-brown">Manufacturing Facility</div>
                        <div className="text-deep-brown/70">
                          Premium Industrial Zone<br />
                          Karachi, Pakistan
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-warm-gold mt-1" />
                      <div>
                        <div className="font-semibold text-deep-brown">Business Hours</div>
                        <div className="text-deep-brown/70">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Globe className="w-6 h-6 text-warm-gold mt-1" />
                      <div>
                        <div className="font-semibold text-deep-brown">Website</div>
                        <div className="text-deep-brown/70">shahmeerenterprises.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-warm-gold to-soft-pink rounded-3xl p-8 text-white">
                  <h3 className="font-cormorant text-2xl font-bold mb-4">
                    We're Here to Help
                  </h3>
                  <p className="mb-4">
                    Our team of experts is ready to assist you with your cosmetics manufacturing needs.
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">Average response time: 2-4 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-brown text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-warm-gold to-soft-pink rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="font-cormorant font-bold text-2xl">Shahmeer Enterprises</span>
              </div>
              <p className="text-white/70 mb-4 max-w-md">
                Your trusted partner for premium cosmetics manufacturing. 
                Creating beautiful products with ethical practices and exceptional quality.
              </p>
              <p className="text-white/60 text-sm">shahmeerenterprises.com</p>
            </div>

            <div>
              <h4 className="font-cormorant font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-white/70 hover:text-white transition-colors duration-300">Home</a>
                <a href="/products" className="block text-white/70 hover:text-white transition-colors duration-300">Our Products</a>
                <a href="/contact" className="block text-white/70 hover:text-white transition-colors duration-300">Contact Us</a>
              </div>
            </div>

            <div>
              <h4 className="font-cormorant font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/70">
                <p>info@shahmeer.com</p>
                <p>+92 300 1234567</p>
                <p>Manufacturing Excellence</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 Shahmeer Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
