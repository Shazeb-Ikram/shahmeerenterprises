import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Download, Sparkles, Shield, Leaf, Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in discussing a bulk order for cosmetics manufacturing.");
    window.open(`https://wa.me/+923001234567?text=${message}`, '_blank');
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'nail-care', name: 'Nail Care' },
    { id: 'skincare', name: 'Skincare' },
    { id: 'makeup', name: 'Makeup' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Nail Polish Remover Wipes',
      category: 'nail-care',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Acetone-free formula', 'Vitamin E enriched', 'Biodegradable wipes', 'Travel-friendly'],
      description: 'Our bestselling nail polish remover wipes offer gentle yet effective removal with nourishing ingredients.',
      badges: ['Best Seller', 'Eco-Friendly']
    },
    {
      id: 2,
      name: 'Skincare Coming Soon',
      category: 'skincare',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Premium formulations', 'Natural ingredients', 'Dermatologist tested', 'All skin types'],
      description: 'Revolutionary skincare products coming soon to transform your daily routine.',
      badges: ['Coming Soon']
    },
    {
      id: 3,
      name: 'Makeup Coming Soon',
      category: 'makeup',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Long-lasting formula', 'Rich pigmentation', 'Cruelty-free', 'Professional grade'],
      description: 'Professional-grade makeup products coming soon with superior quality and performance.',
      badges: ['Coming Soon']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient animate-gradient-shift" />
        <div className="absolute top-20 left-10 w-20 h-20 bg-soft-pink/30 rounded-full blur-xl float-animation" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-warm-gold/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-soft-peach/40 rounded-full blur-lg float-animation" style={{ animationDelay: '4s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto slide-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8 hover:bg-white/30 hover:scale-105 transition-all duration-500 cursor-pointer">
              <Sparkles className="w-5 h-5 text-warm-gold animate-bounce" />
              <span className="text-sm font-medium text-deep-brown">Premium Product Collection</span>
            </div>
            
            <h1 className="font-cormorant text-4xl md:text-6xl font-bold text-deep-brown mb-6 animate-fade-in">
              Our Products
            </h1>
            <p className="text-xl text-deep-brown/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Discover our carefully crafted cosmetics collection, designed with premium ingredients and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-500 hover:scale-110 hover:shadow-xl ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-warm-gold to-soft-pink text-white shadow-lg transform scale-105'
                    : 'bg-white text-deep-brown hover:bg-soft-peach/50 border border-gray-200 hover:border-warm-gold hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift scale-in group cursor-pointer hover:shadow-2xl transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-125 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-3 py-1 text-xs font-semibold rounded-full hover:scale-110 transition-all duration-300 ${
                          badge === 'Best Seller' 
                            ? 'bg-warm-gold text-white hover:bg-warm-gold/90' 
                            : badge === 'Eco-Friendly'
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-gray-500 text-white hover:bg-gray-600'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-bold text-deep-brown mb-3 group-hover:text-warm-gold transition-all duration-500 hover:scale-105">
                    {product.name}
                  </h3>
                  
                  <p className="text-deep-brown/70 mb-4 group-hover:text-deep-brown transition-colors duration-300">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 group/feature hover:translate-x-2 transition-transform duration-300">
                        <div className="w-1.5 h-1.5 bg-warm-gold rounded-full group-hover/feature:scale-200 transition-all duration-300" />
                        <span className="text-sm text-deep-brown/80 group-hover/feature:text-warm-gold transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {product.id === 1 && (
                    <div className="flex items-center justify-end mb-6">
                      <div className="flex items-center gap-1 text-green-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <Leaf className="w-4 h-4" />
                        <span className="text-xs font-medium">Eco-Friendly</span>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    {product.id === 1 ? (
                      <Link 
                        to="/contact"
                        className="flex-1 bg-gradient-to-r from-warm-gold to-soft-pink text-white font-semibold py-3 rounded-full text-center hover:shadow-2xl hover:scale-110 hover:from-warm-gold/90 hover:to-soft-pink/90 transition-all duration-500 transform"
                      >
                        Request Quote
                      </Link>
                    ) : (
                      <button 
                        disabled
                        className="flex-1 bg-gray-300 text-gray-500 font-semibold py-3 rounded-full text-center cursor-not-allowed opacity-60"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-br from-soft-peach/30 to-soft-pink/20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 bg-warm-gold/20 rounded-full blur-xl float-animation" />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-soft-pink/30 rounded-full blur-lg float-animation" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-deep-brown mb-4 animate-fade-in">
              Quality You Can Trust
            </h2>
            <p className="text-xl text-deep-brown/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Every product is crafted with precision and tested to meet the highest international standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'GMP Certified', desc: 'Good Manufacturing Practice compliance' },
              { icon: Sparkles, title: 'ISO Certified', desc: 'International quality management standards' },
              { icon: Leaf, title: 'Halal Certified', desc: 'Ethical and halal manufacturing processes' }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl hover-lift group cursor-pointer hover:bg-white/80 transition-all duration-700 hover:shadow-2xl" style={{ animationDelay: `${index * 0.2}s` }}>
                <item.icon className="w-12 h-12 text-warm-gold mx-auto mb-4 group-hover:scale-150 group-hover:text-soft-pink transition-all duration-700" />
                <h3 className="font-cormorant text-xl font-bold text-deep-brown mb-2 group-hover:text-warm-gold group-hover:scale-110 transition-all duration-500">{item.title}</h3>
                <p className="text-deep-brown/70 text-sm group-hover:text-deep-brown transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Like what you see? Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-peach/10 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-deep-brown mb-4 animate-fade-in">
              Like What You See?
            </h2>
            <p className="text-xl text-deep-brown/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Get in touch with us and let's discuss how we can bring your cosmetics vision to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-soft-peach/20 to-soft-pink/20 rounded-3xl p-8 slide-in-left hover:shadow-2xl hover:scale-105 transition-all duration-700">
                <h3 className="font-cormorant text-2xl font-bold text-deep-brown mb-6 animate-fade-in">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="hover:scale-105 transition-transform duration-300">
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent focus:scale-105 transition-all duration-500 hover:border-warm-gold hover:shadow-lg"
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300">
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent focus:scale-105 transition-all duration-500 hover:border-warm-gold hover:shadow-lg"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="hover:scale-105 transition-transform duration-300">
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent focus:scale-105 transition-all duration-500 hover:border-warm-gold hover:shadow-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300">
                      <label className="block text-sm font-medium text-deep-brown mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent focus:scale-105 transition-all duration-500 hover:border-warm-gold hover:shadow-lg"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="hover:scale-105 transition-transform duration-300">
                    <label className="block text-sm font-medium text-deep-brown mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-warm-gold focus:border-transparent focus:scale-105 transition-all duration-500 resize-none hover:border-warm-gold hover:shadow-lg"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-warm-gold to-soft-pink text-white font-semibold py-4 rounded-xl hover:shadow-2xl hover:scale-110 hover:from-warm-gold/90 hover:to-soft-pink/90 hover:rotate-1 transition-all duration-500 transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="slide-in-right space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-700">
                  <h3 className="font-cormorant text-2xl font-bold text-deep-brown mb-6 animate-fade-in">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <button 
                      onClick={handleWhatsAppClick}
                      className="w-full flex items-center gap-4 p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:rotate-1"
                    >
                      <MessageCircle className="w-6 h-6 animate-bounce hover:animate-spin" />
                      <div className="text-left">
                        <div className="font-semibold">WhatsApp Business</div>
                        <div className="text-sm opacity-90">+92 300 1234567</div>
                      </div>
                    </button>

                    <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-all duration-500 cursor-pointer hover:scale-110 hover:rotate-1">
                      <Mail className="w-6 h-6 text-blue-500 animate-bounce hover:animate-spin" />
                      <div>
                        <div className="font-semibold text-deep-brown">Email Us</div>
                        <div className="text-sm text-deep-brown/70">info@shahmeer.com</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-warm-gold/10 rounded-xl hover:bg-warm-gold/20 transition-all duration-500 cursor-pointer hover:scale-110 hover:rotate-1">
                      <Phone className="w-6 h-6 text-warm-gold animate-bounce hover:animate-spin" />
                      <div>
                        <div className="font-semibold text-deep-brown">Phone</div>
                        <div className="text-sm text-deep-brown/70">+92 300 1234567</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-brown text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warm-gold to-soft-pink animate-pulse" />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-warm-gold to-soft-pink rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-180 transition-all duration-700">
                  <Sparkles className="w-6 h-6 text-white animate-pulse group-hover:animate-spin" />
                </div>
                <span className="font-cormorant font-bold text-2xl group-hover:text-warm-gold transition-colors duration-500">Shahmeer Enterprises</span>
              </div>
              <p className="text-white/70 mb-4 max-w-md hover:text-white transition-colors duration-300">
                Your trusted partner for premium cosmetics manufacturing. 
                Creating beautiful products with ethical practices and exceptional quality.
              </p>
              <p className="text-white/60 text-sm hover:text-warm-gold transition-colors duration-300 cursor-pointer">shahmeerenterprises.com</p>
            </div>

            <div>
              <h4 className="font-cormorant font-bold text-lg mb-4 hover:text-warm-gold transition-colors duration-300">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-white/70 hover:text-white hover:translate-x-4 hover:scale-110 transition-all duration-500">Home</Link>
                <Link to="/products" className="block text-white/70 hover:text-white hover:translate-x-4 hover:scale-110 transition-all duration-500">Our Products</Link>
                <Link to="/contact" className="block text-white/70 hover:text-white hover:translate-x-4 hover:scale-110 transition-all duration-500">Contact Us</Link>
              </div>
            </div>

            <div>
              <h4 className="font-cormorant font-bold text-lg mb-4 hover:text-warm-gold transition-colors duration-300">Contact Info</h4>
              <div className="space-y-2 text-white/70">
                <p className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">info@shahmeer.com</p>
                <p className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">+92 300 1234567</p>
                <p className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">Manufacturing Excellence</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p className="hover:text-warm-gold transition-colors duration-500 cursor-pointer">&copy; 2024 Shahmeer Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
