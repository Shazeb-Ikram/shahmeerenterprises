
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Sparkles, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const slides = [
    {
      image: '/placeholder.svg',
      title: 'Premium Cosmetics Manufacturing Partner',
      subtitle: 'Partner with our ethical manufacturing hub for bespoke cosmetic solutions',
      cta: 'Request Partnership Details'
    },
    {
      image: '/placeholder.svg',
      title: 'Custom Formulation Services',
      subtitle: 'Tailored solutions for retailers, spas, and beauty brands worldwide',
      cta: 'Explore Our Capabilities'
    },
    {
      image: '/placeholder.svg',
      title: 'Certified Quality Standards',
      subtitle: 'GMP, ISO, and Halal certified manufacturing with global compliance',
      cta: 'View Certifications'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center mt-16 overflow-hidden">
      {/* Dynamic Background with Floating Elements */}
      <div className="absolute inset-0">
        {/* Floating Sparkles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles 
              size={12 + Math.random() * 8} 
              className="text-warm-gold animate-pulse"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
          </div>
        ))}
        
        {/* Mouse-following Gradient */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(220,162,114,0.3) 0%, rgba(255,192,203,0.2) 50%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: 'translate(-50%, -50%)'
          }}
        />

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="hero-gradient absolute inset-0 animate-gradient-shift" />
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-brown/70 via-transparent to-deep-brown/50" />
          </div>
        ))}
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Stars */}
          <div className="flex justify-center mb-4 space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={20} 
                className="text-warm-gold animate-pulse fill-current"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in text-gradient">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed slide-in-up">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scale-in">
            <button className="ultra-premium-button text-deep-brown font-semibold px-8 py-4 rounded-lg transition-all duration-500 transform shadow-lg group">
              <span className="relative z-10">{slides[currentSlide].cta}</span>
            </button>
            <button className="flex items-center gap-2 text-white hover:text-warm-gold transition-all duration-500 border-2 border-white/30 hover:border-warm-gold px-6 py-4 rounded-lg hover-lift backdrop-blur-sm bg-white/10">
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Watch Our Process
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-gold transition-all duration-500 bg-black/30 hover:bg-warm-gold/20 p-4 rounded-full backdrop-blur-sm hover-lift group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-gold transition-all duration-500 bg-black/30 hover:bg-warm-gold/20 p-4 rounded-full backdrop-blur-sm hover-lift group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 relative overflow-hidden ${
              index === currentSlide 
                ? 'bg-warm-gold scale-125 shadow-lg shadow-warm-gold/50' 
                : 'bg-white/50 hover:bg-white/80 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-warm-gold via-soft-pink to-soft-peach animate-gradient-shift rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-20 right-8 flex flex-col space-y-3">
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-warm-gold/20 transition-all duration-300 cursor-pointer hover-lift">
          <Sparkles size={20} className="text-warm-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
