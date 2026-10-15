import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="hero-revslider-wrapper">
      <div className="hero-revslider-canvas">
        {/* ======================= SLIDE 1 ======================= */}
        <div className={`hero-rev-slide slide-1 ${currentSlide === 0 ? 'active' : ''}`}>
          {/* Angled Skewed Shapes (layers 24, 23, 25) */}
          <div className="rs-skew-shape rs-shape-24"></div>
          <div className="rs-skew-shape rs-shape-23"></div>
          <div className="rs-skew-shape rs-shape-25"></div>

          {/* Man Model (layer 26) - with local fallback and direct URL */}
          <div className="rs-man-layer">
            <img
              src="/man-model.png"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/man-model.png";
              }}
              alt="Construction Worker"
              className="rs-man-img"
            />
          </div>

          {/* Text Content Grid bounded by reference container (1280px) */}
          <div className="rs-content-container">
            {/* Top Tag "Why choose us?" (layer 14) */}
            <div className="rs-layer-tag">
              Why choose us?
            </div>

            {/* Heading "START NEW PROJECTS" (layer 21) */}
            <h1 className="rs-layer-heading">
              <span className="heading-line line-dark">START</span>
              <span className="heading-line line-dark">NEW</span>
              <span className="heading-line line-gold">PROJECTS</span>
            </h1>

            {/* Subtitle "Don't get framed..." (layer 22) */}
            <p className="rs-layer-subheading">
              Don’t get framed by the competition, <br />
              trust our solid reputation.
            </p>

            {/* Video Play Trigger (layers 9 & 10) */}
            <div className="rs-video-group" onClick={() => setVideoOpen(true)}>
              <button className="rs-play-btn" aria-label="Play video">
                <i className="fa-solid fa-play"></i>
              </button>
              <div className="rs-play-text">
                <span className="rs-play-sub">Watch video</span>
                <span className="rs-play-title">Why choose us?</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================= SLIDE 2 ======================= */}
        <div 
          className={`hero-rev-slide slide-2 ${currentSlide === 1 ? 'active' : ''}`}
          style={{ backgroundImage: `url(https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/slide-2.jpg)` }}
        >
          <div className="slide-2-dim-overlay"></div>
          <div className="slide-2-center-box">
            <div className="slide-2-ribbon dark-ribbon">
              Committed to superior quality and results
            </div>
            <div className="slide-2-ribbon gold-ribbon">
              We'll get it done, like us there are none
            </div>
          </div>
        </div>

        {/* Slide Controls: Previous / Next */}
        <button
          className="rs-nav-arrow rs-arrow-left"
          onClick={() => setCurrentSlide((currentSlide - 1 + 2) % 2)}
          aria-label="Previous slide"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="rs-nav-arrow rs-arrow-right"
          onClick={() => setCurrentSlide((currentSlide + 1) % 2)}
          aria-label="Next slide"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Bottom Bullets */}
        <div className="rs-bullets-wrapper">
          <button
            className={`rs-bullet-dot ${currentSlide === 0 ? 'active' : ''}`}
            onClick={() => setCurrentSlide(0)}
            aria-label="Slide 1"
          />
          <button
            className={`rs-bullet-dot ${currentSlide === 1 ? 'active' : ''}`}
            onClick={() => setCurrentSlide(1)}
            aria-label="Slide 2"
          />
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="video-modal-backdrop" onClick={() => setVideoOpen(false)}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close-btn" onClick={() => setVideoOpen(false)} aria-label="Close video">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="video-responsive-holder">
              <iframe
                src="https://www.youtube.com/embed/FyS_zcvmUr4?autoplay=1"
                title="Why choose us"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
