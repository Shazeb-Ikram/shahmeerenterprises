
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import SocialMediaBar from '../components/SocialMediaBar';
import InstagramFeed from '../components/InstagramFeed';
import CapabilitiesShowcase from '../components/CapabilitiesShowcase';
import TrustBadges from '../components/TrustBadges';
import ProductionStats from '../components/ProductionStats';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import StickyContactRibbon from '../components/StickyContactRibbon';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-cream transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <SocialMediaBar />
      <HeroSection />
      <InstagramFeed />
      <CapabilitiesShowcase />
      <TrustBadges />
      <ProductionStats />
      <ContactSection />
      <Footer />
      <StickyContactRibbon />
    </div>
  );
};

export default Index;
