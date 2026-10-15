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
      {/* 1. Header with Top Bar, Nav, Search, Consultation CTA */}
      <Header />

      <main>
        {/* 2. Hero Section with 2 Revolution Slider Slides */}
        <Hero />

        {/* 3. Features At A Glance (Helmet Icon + 3 Flip Cards) */}
        <FeaturesGlance />

        {/* 4. About Our Company (Devoted & Dedicated + Checklist) */}
        <AboutSection />

        {/* 5. What We Can Do For You (Services Cards) */}
        <ServicesSection />

        {/* 6. Process of Construction (How it works + 3 Steps) */}
        <ProcessSection />

        {/* 7. We Are Professional (Latest Projects Gallery + Category Filters + Modal) */}
        <ProjectsSection />

        {/* 8. Interested in Construction? (Request a free quote form) */}
        <QuoteSection />

        {/* 9. See What Says Our Happy Clients (Testimonials Carousel) */}
        <TestimonialsSection />

        {/* 10. Partner Logos Bar */}
        <PartnersSection />
      </main>

      {/* 11. Footer with About text, social links, and sub-footer */}
      <Footer />

      {/* Back to top button */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Back to top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
