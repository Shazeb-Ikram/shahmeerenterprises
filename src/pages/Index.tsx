
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Sparkles, Star, ArrowRight, Play, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-warm-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-soft-pink/30" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-soft-pink/30 rounded-full blur-xl float-animation" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-warm-gold/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-soft-peach/40 rounded-full blur-lg float-animation" style={{ animationDelay: '4s' }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto slide-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8 hover:bg-white/30 transition-all duration-300 cursor-pointer">
              <Sparkles className="w-5 h-5 text-warm-gold animate-pulse" />
              <span className="text-sm font-medium text-deep-brown">Premium Cosmetics Manufacturing</span>
            </div>
            
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold text-deep-brown mb-6 leading-tight">
              Beauty that
              <span className="block bg-gradient-to-r from-warm-gold to-soft-pink bg-clip-text text-transparent">
                Transforms
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-deep-brown/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with our ethical manufacturing hub for bespoke cosmetic solutions. 
              Custom formulation services for retailers & spas worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/products"
                className="group bg-gradient-to-r from-warm-gold to-soft-pink text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:from-warm-gold/90 hover:to-soft-pink/90 flex items-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <button className="group flex items-center gap-3 text-deep-brown hover:text-warm-gold transition-colors duration-300">
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-warm-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-peach/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-deep-brown mb-4">
              Featured Product
            </h2>
            <p className="text-xl text-deep-brown/70 max-w-2xl mx-auto">
              Discover our premium nail polish remover wipes - the perfect solution for quick and gentle nail care
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative slide-in-left">
                <div className="relative bg-gradient-to-br from-soft-peach/30 to-soft-pink/30 rounded-3xl p-8 hover-lift group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/10 to-soft-pink/10 rounded-3xl group-hover:from-warm-gold/20 group-hover:to-soft-pink/20 transition-all duration-300" />
                  <img 
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Nail Polish Remover Wipes" 
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-warm-gold text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                    Best Seller
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="slide-in-right">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warm-gold text-warm-gold hover:scale-110 transition-transform duration-200 cursor-pointer" />
                  ))}
                  <span className="text-deep-brown/70 ml-2">4.9 (2,847 reviews)</span>
                </div>

                <h3 className="font-cormorant text-3xl md:text-4xl font-bold text-deep-brown mb-6">
                  Premium Nail Polish Remover Wipes
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-warm-gold rounded-full mt-2 group-hover:scale-150 transition-transform duration-200" />
                    <p className="text-deep-brown/80">Gentle acetone-free formula</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-warm-gold rounded-full mt-2 group-hover:scale-150 transition-transform duration-200" />
                    <p className="text-deep-brown/80">Infused with nourishing vitamin E</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-warm-gold rounded-full mt-2 group-hover:scale-150 transition-transform duration-200" />
                    <p className="text-deep-brown/80">Convenient travel-friendly packaging</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-warm-gold rounded-full mt-2 group-hover:scale-150 transition-transform duration-200" />
                    <p className="text-deep-brown/80">Eco-friendly biodegradable wipes</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/products"
                    className="bg-gradient-to-r from-warm-gold to-soft-pink text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 hover:from-warm-gold/90 hover:to-soft-pink/90 transition-all duration-300 text-center"
                  >
                    View Full Details
                  </Link>
                  <Link 
                    to="/contact"
                    className="border-2 border-warm-gold text-warm-gold font-semibold px-8 py-4 rounded-full hover:bg-warm-gold hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                  >
                    Request Sample
                  </Link>
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
              <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-warm-gold to-soft-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <span className="font-cormorant font-bold text-2xl group-hover:text-warm-gold transition-colors duration-300">Shahmeer Enterprises</span>
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
                <Link to="/" className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300">Home</Link>
                <Link to="/products" className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300">Our Products</Link>
                <Link to="/contact" className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300">Contact Us</Link>
              </div>
            </div>

            <div>
              <h4 className="font-cormorant font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/70">
                <p className="hover:text-white transition-colors duration-300 cursor-pointer">info@shahmeer.com</p>
                <p className="hover:text-white transition-colors duration-300 cursor-pointer">+92 300 1234567</p>
                <p className="hover:text-white transition-colors duration-300">Manufacturing Excellence</p>
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

export default Index;
