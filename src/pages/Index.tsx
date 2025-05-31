
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import CapabilitiesShowcase from '../components/CapabilitiesShowcase';
import ProductionStats from '../components/ProductionStats';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import StickyContactRibbon from '../components/StickyContactRibbon';
import InstagramFeed from '../components/InstagramFeed';

const Index = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      <HeroSection />
      <TrustBadges />
      <CapabilitiesShowcase />
      <ProductionStats />
      <InstagramFeed />
      <ContactSection />
      <Footer />
      <StickyContactRibbon />
    </div>
  );
};

export default Index;
