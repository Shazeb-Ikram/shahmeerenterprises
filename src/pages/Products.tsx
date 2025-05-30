
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Star, Download, ArrowRight, Sparkles, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      rating: 4.9,
      reviews: 2847,
      features: ['Acetone-free formula', 'Vitamin E enriched', 'Biodegradable wipes', 'Travel-friendly'],
      description: 'Our bestselling nail polish remover wipes offer gentle yet effective removal with nourishing ingredients.',
      badges: ['Best Seller', 'Eco-Friendly'],
      minimumOrder: '500 units'
    },
    // Placeholder for future products
    {
      id: 2,
      name: 'Coming Soon - Hydrating Face Serum',
      category: 'skincare',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 0,
      reviews: 0,
      features: ['Hyaluronic acid', 'Anti-aging formula', 'All skin types', 'Dermatologist tested'],
      description: 'Revolutionary anti-aging serum with advanced hydration technology (Coming Soon).',
      badges: ['Coming Soon'],
      minimumOrder: 'TBA'
    },
    {
      id: 3,
      name: 'Coming Soon - Long-lasting Lipstick',
      category: 'makeup',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 0,
      reviews: 0,
      features: ['16-hour wear', 'Matte finish', 'Cruelty-free', 'Rich pigmentation'],
      description: 'Professional-grade lipstick with superior staying power and comfort (Coming Soon).',
      badges: ['Coming Soon'],
      minimumOrder: 'TBA'
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
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto slide-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-5 h-5 text-warm-gold" />
              <span className="text-sm font-medium text-deep-brown">Premium Product Collection</span>
            </div>
            
            <h1 className="font-cormorant text-4xl md:text-6xl font-bold text-deep-brown mb-6">
              Our Products
            </h1>
            <p className="text-xl text-deep-brown/80 max-w-2xl mx-auto">
              Discover our carefully crafted cosmetics collection, designed with premium ingredients and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-warm-gold to-soft-pink text-white shadow-lg'
                    : 'bg-white text-deep-brown hover:bg-soft-peach/50 border border-gray-200'
                }`}
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
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          badge === 'Best Seller' 
                            ? 'bg-warm-gold text-white' 
                            : badge === 'Eco-Friendly'
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-500 text-white'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  {product.rating > 0 && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                        ))}
                      </div>
                      <span className="text-sm text-deep-brown/70">
                        {product.rating} ({product.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                  )}

                  <h3 className="font-cormorant text-2xl font-bold text-deep-brown mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-deep-brown/70 mb-4">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-warm-gold rounded-full" />
                        <span className="text-sm text-deep-brown/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-deep-brown/60">
                      Min. Order: {product.minimumOrder}
                    </span>
                    {product.id === 1 && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Leaf className="w-4 h-4" />
                        <span className="text-xs font-medium">Eco-Friendly</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {product.id === 1 ? (
                      <>
                        <Link 
                          to="/contact"
                          className="flex-1 bg-gradient-to-r from-warm-gold to-soft-pink text-white font-semibold py-3 rounded-full text-center hover:shadow-lg transition-all duration-300"
                        >
                          Request Quote
                        </Link>
                        <button className="px-4 py-3 border-2 border-warm-gold text-warm-gold rounded-full hover:bg-warm-gold hover:text-white transition-all duration-300">
                          <Download className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <button 
                        disabled
                        className="flex-1 bg-gray-300 text-gray-500 font-semibold py-3 rounded-full text-center cursor-not-allowed"
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
      <section className="py-20 bg-gradient-to-br from-soft-peach/30 to-soft-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-deep-brown mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-xl text-deep-brown/70 max-w-2xl mx-auto">
              Every product is crafted with precision and tested to meet the highest international standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl hover-lift">
              <Shield className="w-12 h-12 text-warm-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-bold text-deep-brown mb-2">GMP Certified</h3>
              <p className="text-deep-brown/70 text-sm">Good Manufacturing Practice compliance</p>
            </div>

            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl hover-lift">
              <Sparkles className="w-12 h-12 text-warm-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-bold text-deep-brown mb-2">ISO Certified</h3>
              <p className="text-deep-brown/70 text-sm">International quality management standards</p>
            </div>

            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl hover-lift">
              <Leaf className="w-12 h-12 text-warm-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-bold text-deep-brown mb-2">Halal Certified</h3>
              <p className="text-deep-brown/70 text-sm">Ethical and halal manufacturing processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-warm-gold to-soft-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto slide-in-up">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch to discuss your cosmetics manufacturing needs and receive a custom quote
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-warm-gold font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-warm-gold transition-all duration-300">
                Download Catalog
              </button>
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
                <Link to="/" className="block text-white/70 hover:text-white transition-colors duration-300">Home</Link>
                <Link to="/products" className="block text-white/70 hover:text-white transition-colors duration-300">Our Products</Link>
                <Link to="/contact" className="block text-white/70 hover:text-white transition-colors duration-300">Contact Us</Link>
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

export default Products;
