
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center mt-16 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-deep-brown/90 via-deep-brown/70 to-deep-brown/90" />
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Quality Stars */}
          <div className="flex justify-center mb-6 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={20} 
                className="text-warm-gold fill-current"
              />
            ))}
          </div>

          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-warm-gold to-warm-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              {slides[currentSlide].cta}
            </button>
            <button className="flex items-center gap-2 text-white hover:text-warm-gold transition-all duration-300 border-2 border-white/30 hover:border-warm-gold px-6 py-4 rounded-lg backdrop-blur-sm bg-white/10">
              <Play size={20} />
              Watch Our Process
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-gold transition-all duration-300 bg-black/30 hover:bg-warm-gold/20 p-3 rounded-full backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-gold transition-all duration-300 bg-black/30 hover:bg-warm-gold/20 p-3 rounded-full backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-warm-gold scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
