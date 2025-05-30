
import React from 'react';
import { Download, Package, Sparkles, Scissors } from 'lucide-react';

const CapabilitiesShowcase = () => {
  const categories = [
    {
      icon: Sparkles,
      title: 'Skincare Manufacturing',
      description: 'Advanced formulations for cleansers, moisturizers, serums, and anti-aging products',
      features: ['Custom formulation', 'Natural ingredients', 'Clinical testing', 'MOQ: 1000 units'],
      image: '/placeholder.svg'
    },
    {
      icon: Package,
      title: 'Makeup Production',
      description: 'Complete makeup line manufacturing from foundation to lipsticks and eyeshadows',
      features: ['Color matching', 'Long-lasting formulas', 'Trend-focused', 'MOQ: 500 units'],
      image: '/placeholder.svg'
    },
    {
      icon: Scissors,
      title: 'Haircare Solutions',
      description: 'Professional-grade shampoos, conditioners, treatments, and styling products',
      features: ['Sulfate-free options', 'Specialized treatments', 'Salon quality', 'MOQ: 2000 units'],
      image: '/placeholder.svg'
    }
  ];

  const handleDownloadCatalog = (category: string) => {
    // In a real implementation, this would trigger a catalog download
    console.log(`Downloading ${category} catalog`);
  };

  return (
    <section className="py-20 bg-soft-blush/30" id="capabilities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-dark-charcoal mb-6">
            Our Manufacturing Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to creation, we offer comprehensive cosmetics manufacturing services 
            tailored to your brand's unique vision and market needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <IconComponent size={40} className="text-rose-gold" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-dark-charcoal mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleDownloadCatalog(category.title)}
                      className="flex-1 bg-rose-gold hover:bg-rose-gold/90 text-dark-charcoal font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      Download Catalog
                    </button>
                    <button className="px-4 py-3 border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-dark-charcoal transition-all duration-300 rounded-lg font-semibold">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-dark-charcoal mb-4">
              Custom Formulation Services
            </h3>
            <p className="text-gray-600 mb-6">
              Work with our R&D team to create unique formulations that set your brand apart. 
              We offer complete product development from initial concept to market-ready solutions.
            </p>
            <button className="bg-dark-charcoal text-white px-8 py-3 rounded-lg hover:bg-dark-charcoal/90 transition-colors duration-300 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesShowcase;
