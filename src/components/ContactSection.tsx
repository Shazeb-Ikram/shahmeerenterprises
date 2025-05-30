
import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    orderVolume: '',
    productType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent(`Hello! I'm interested in discussing manufacturing partnership. 
Company: ${formData.companyName}
Contact: ${formData.contactName}
Expected Volume: ${formData.orderVolume}
Product Interest: ${formData.productType}`);
    window.open(`https://wa.me/+923001234567?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-dark-charcoal text-white relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-gold via-transparent to-soft-blush"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold mb-6">
            Start Your Manufacturing Partnership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your cosmetic vision to life? Let's discuss your requirements 
            and explore how we can support your brand's growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="font-playfair text-3xl font-bold mb-6 text-rose-gold">
              Get Partnership Details
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-rose-gold focus:outline-none text-white placeholder-gray-400"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-rose-gold focus:outline-none text-white placeholder-gray-400"
                    placeholder="Your Full Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-rose-gold focus:outline-none text-white placeholder-gray-400"
                    placeholder="contact@yourcompany.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-rose-gold focus:outline-none text-white placeholder-gray-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Expected Order Volume *
                  </label>
                  <select
                    name="orderVolume"
                    value={formData.orderVolume}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-rose-gold focus:outline-none text-white"
                  >
                    <option value="" className="text-gray-800">Select Volume Range</option>
                    <option value="500-2000" className="text-gray-800">500 - 2,000 units</option>
                    <option value="2000-10000" className="text-gray-800">2,000 - 10,000 units</option>
                    <option value="10000-50000" className="text-gray-800">10,000 - 50,000 units</option>
                    <option value="50000+" className="text-gray-800">50,000+ units</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Product Category
                  </label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-rose-gold focus:outline-none text-white"
                  >
                    <option value="" className="text-gray-800">Select Category</option>
                    <option value="skincare" className="text-gray-800">Skincare</option>
                    <option value="makeup" className="text-gray-800">Makeup</option>
                    <option value="haircare" className="text-gray-800">Haircare</option>
                    <option value="multiple" className="text-gray-800">Multiple Categories</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-rose-gold focus:outline-none text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-rose-gold hover:bg-rose-gold/90 text-dark-charcoal font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Partnership Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-rose-gold">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Manufacturing Facility</h4>
                    <p className="text-gray-300">
                      Industrial Estate, Sector 15<br />
                      Karachi, Pakistan 75500
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Line</h4>
                    <p className="text-gray-300">+92 300 123 4567</p>
                    <p className="text-sm text-gray-400">Available 9 AM - 6 PM (PKT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Contact</h4>
                    <p className="text-gray-300">info@shahmeer.com</p>
                    <p className="text-sm text-gray-400">Response within 4 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Portal */}
            <div className="bg-gradient-to-br from-rose-gold/20 to-soft-blush/20 rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-rose-gold">
                Existing Client Portal
              </h3>
              <p className="text-gray-300 mb-6">
                Access your order status, production schedules, and quality reports through our secure client portal.
              </p>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
                Client Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
