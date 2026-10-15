import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGlance from './components/FeaturesGlance';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import QuoteSection from './components/QuoteSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      
      <Header />

      <main>
        
        <Hero />

        
        <FeaturesGlance />

        
        <AboutSection />

        
        <ServicesSection />

        
        <ProcessSection />

        
        <ProjectsSection />

        
        <QuoteSection />

        
        <TestimonialsSection />

        
        <PartnersSection />
      </main>

      
      <Footer />

      
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Back to top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
