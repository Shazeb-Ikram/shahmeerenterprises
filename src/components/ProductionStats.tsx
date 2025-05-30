
import React from 'react';
import { Factory, Users, Globe, Clock } from 'lucide-react';

const ProductionStats = () => {
  const stats = [
    {
      icon: Factory,
      number: '50,000+',
      label: 'Units Daily Capacity',
      description: 'State-of-the-art production facility'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Satisfied Clients',
      description: 'Across 25+ countries worldwide'
    },
    {
      icon: Globe,
      number: '15+',
      label: 'Years Experience',
      description: 'In cosmetics manufacturing'
    },
    {
      icon: Clock,
      number: '14-21',
      label: 'Days Lead Time',
      description: 'From order to delivery'
    }
  ];

  return (
    <section className="py-20 marble-gradient relative overflow-hidden" id="stats">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-rose-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-dark-charcoal rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-gold/20 rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-dark-charcoal mb-6">
            Manufacturing Excellence in Numbers
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our production capabilities and track record speak for themselves. 
            We deliver quality, consistency, and reliability at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-gold/10 rounded-full mb-6 group-hover:bg-rose-gold/20 transition-colors duration-300">
                    <IconComponent size={40} className="text-rose-gold" />
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold font-playfair text-dark-charcoal mb-2">
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-dark-charcoal mb-6">
              Production Capacity Overview
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-cream/50 rounded-lg p-6">
                <h4 className="font-semibold text-dark-charcoal mb-3">Skincare Products</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Creams & Lotions: 25,000 units/day</li>
                  <li>• Serums & Oils: 15,000 units/day</li>
                  <li>• Cleansers: 20,000 units/day</li>
                </ul>
              </div>
              <div className="bg-soft-blush/50 rounded-lg p-6">
                <h4 className="font-semibold text-dark-charcoal mb-3">Makeup Products</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Liquid Products: 12,000 units/day</li>
                  <li>• Powder Products: 18,000 units/day</li>
                  <li>• Lipsticks: 10,000 units/day</li>
                </ul>
              </div>
              <div className="bg-rose-gold/20 rounded-lg p-6">
                <h4 className="font-semibold text-dark-charcoal mb-3">Haircare Products</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shampoos: 30,000 units/day</li>
                  <li>• Conditioners: 25,000 units/day</li>
                  <li>• Treatments: 8,000 units/day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionStats;
