
import React from 'react';
import { Shield, Award, Globe, Users } from 'lucide-react';

const TrustBadges = () => {
  const certifications = [
    {
      name: 'GMP Certified',
      description: 'Good Manufacturing Practice',
      icon: Shield,
      color: 'text-green-600'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      icon: Award,
      color: 'text-blue-600'
    },
    {
      name: 'Halal Certified',
      description: 'Islamic Standards Compliance',
      icon: Globe,
      color: 'text-purple-600'
    },
    {
      name: 'FDA Registered',
      description: 'US Food & Drug Administration',
      icon: Shield,
      color: 'text-red-600'
    }
  ];

  const trustedBy = [
    { name: 'Beauty Brand A', logo: '/placeholder.svg' },
    { name: 'Spa Chain B', logo: '/placeholder.svg' },
    { name: 'Retailer C', logo: '/placeholder.svg' },
    { name: 'International Brand D', logo: '/placeholder.svg' },
    { name: 'Wellness Company E', logo: '/placeholder.svg' },
    { name: 'Luxury Brand F', logo: '/placeholder.svg' }
  ];

  return (
    <section className="py-16 bg-white" id="trust">
      <div className="container mx-auto px-4">
        {/* Certifications */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-dark-charcoal mb-6">
            Certified Quality & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Our commitment to excellence is backed by international certifications and rigorous quality standards
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 ${cert.color}`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="font-semibold text-dark-charcoal mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users size={32} className="text-rose-gold" />
              <h3 className="font-playfair text-3xl font-bold text-dark-charcoal">
                Trusted By Leading Brands
              </h3>
            </div>
            <p className="text-lg text-gray-600">
              Join hundreds of satisfied clients who rely on our manufacturing expertise
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {trustedBy.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Export Documentation */}
        <div className="mt-16 bg-gradient-to-r from-rose-gold/10 to-soft-blush/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold text-dark-charcoal mb-4">
              Export-Ready Documentation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Complete documentation packages for international shipping including COA, MSDS, 
              customs declarations, and compliance certificates for global markets.
            </p>
            <button className="bg-dark-charcoal text-white px-6 py-3 rounded-lg hover:bg-dark-charcoal/90 transition-colors duration-300 font-semibold">
              Download Documentation Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
