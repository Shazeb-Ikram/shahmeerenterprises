
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Globe, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-peach to-warm-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-deep-brown mb-6">
              About <span className="text-warm-gold">Shahmeer Enterprises</span>
            </h1>
            <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
              Your trusted partner in premium cosmetics manufacturing since 2012
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Company Overview */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
              <h2 className="text-3xl font-semibold text-deep-brown mb-6 flex items-center gap-3">
                <Calendar className="text-warm-gold" size={32} />
                Our Story
              </h2>
              <p className="text-deep-brown/90 text-lg leading-relaxed mb-6">
                Established in 2012, Shahmeer Enterprises has grown to become Pakistan's leading cosmetics manufacturing company. What started as a vision to provide high-quality beauty products has evolved into a comprehensive manufacturing powerhouse that serves the entire spectrum of cosmetic needs.
              </p>
              <p className="text-deep-brown/90 text-lg leading-relaxed">
                We specialize in manufacturing all kinds of cosmetics, from skincare and makeup to nail care and personal care products. Our commitment to excellence and innovation has made us the preferred choice for businesses across Pakistan and beyond.
              </p>
            </div>

            {/* Manufacturing Process */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
              <h2 className="text-3xl font-semibold text-deep-brown mb-6 flex items-center gap-3">
                <Award className="text-warm-gold" size={32} />
                Our Manufacturing Excellence
              </h2>
              <p className="text-deep-brown/90 text-lg leading-relaxed mb-6">
                Our state-of-the-art manufacturing process begins with rigorous ingredient sourcing from certified suppliers worldwide. Each raw material undergoes comprehensive quality testing in our GMP-certified laboratories before entering our production facility.
              </p>
              <p className="text-deep-brown/90 text-lg leading-relaxed mb-6">
                Our automated production lines ensure consistent quality while maintaining the flexibility to handle both large-scale orders and custom formulations. Every product passes through multiple quality checkpoints, including microbiological testing, stability testing, and performance evaluation.
              </p>
              <p className="text-deep-brown/90 text-lg leading-relaxed">
                We maintain ISO certification standards throughout our manufacturing process, ensuring that every product meets international quality benchmarks before it reaches our customers.
              </p>
            </div>

            {/* Market Reach */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
              <h2 className="text-3xl font-semibold text-deep-brown mb-6 flex items-center gap-3">
                <Users className="text-warm-gold" size={32} />
                Our Market Presence
              </h2>
              <p className="text-deep-brown/90 text-lg leading-relaxed mb-6">
                Shahmeer Enterprises proudly serves both retailers and wholesalers, covering an impressive 95% of the Pakistani market. Our extensive distribution network ensures that our products reach every corner of the country, from major cities to remote areas.
              </p>
              <p className="text-deep-brown/90 text-lg leading-relaxed">
                We work closely with beauty retailers, pharmacies, supermarket chains, and independent stores to provide them with reliable, high-quality products that their customers trust and love.
              </p>
            </div>

            {/* International Operations */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-semibold text-deep-brown mb-6 flex items-center gap-3">
                <Globe className="text-warm-gold" size={32} />
                Global Reach
              </h2>
              <p className="text-deep-brown/90 text-lg leading-relaxed mb-6">
                Beyond our strong domestic presence, Shahmeer Enterprises has successfully expanded into international markets. We export our premium cosmetic products to various countries, building lasting partnerships with distributors and brands worldwide.
              </p>
              <p className="text-deep-brown/90 text-lg leading-relaxed">
                Our international operations are built on the same principles of quality, reliability, and customer satisfaction that have made us successful in Pakistan. We understand global beauty trends and regulatory requirements, ensuring our products meet international standards wherever they're sold.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
