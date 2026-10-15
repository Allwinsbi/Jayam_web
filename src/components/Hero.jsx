import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    key: 'slide-1'
  },
  {
    id: 2,
    key: 'slide-2'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="rev-slider-wrapper">
      <div className="rev-slider-viewport">
        {/* ==================== SLIDE 1 ==================== */}
        <div className={`rev-slide slide-1 ${currentSlide === 0 ? 'active' : ''}`}>
          {/* Angled Skew Shapes */}
          <div className="rev-skew-shape skew-1"></div>
          <div className="rev-skew-shape skew-2"></div>
          <div className="rev-skew-shape skew-3"></div>

          {/* Man Model Cutout positioned on the right */}
          <div className="rev-man-layer">
            <img
              src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/man-model.png"
              alt="Construction Professional"
              className="rev-man-img"
            />
          </div>

          {/* Foreground Content Area */}
          <div className="container rev-container">
            <div className="rev-content-block">
              {/* Badge "Why choose us?" at top left */}
              <div className="rev-top-badge">
                Why choose us?
              </div>

              {/* Main 3-line heading: START NEW PROJECTS */}
              <h1 className="rev-main-heading">
                <span>START</span>
                <span>NEW</span>
                <span className="gold-text">PROJECTS</span>
              </h1>

              {/* Tagline / Subtitle */}
              <p className="rev-subheading">
                Don’t get framed by the competition, <br />
                trust our solid reputation.
              </p>

              {/* Video Play Area */}
              <div className="rev-video-layer">
                <button
                  className="rev-play-button"
                  onClick={() => setVideoOpen(true)}
                  aria-label="Watch video"
                >
                  <i className="fa-solid fa-play"></i>
                </button>
                <div className="rev-video-label" onClick={() => setVideoOpen(true)}>
                  <span className="rev-video-sub">Watch video</span>
                  <span className="rev-video-main">Why choose us?</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SLIDE 2 ==================== */}
        <div 
          className={`rev-slide slide-2 ${currentSlide === 1 ? 'active' : ''}`}
          style={{ backgroundImage: `url(https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/slide-2.jpg)` }}
        >
          <div className="slide-2-dark-overlay"></div>
          <div className="container rev-container slide-2-center">
            {/* Top dark banner: "Committed to superior quality and results" */}
            <div className="slide-2-badge-dark">
              Committed to superior quality and results
            </div>

            {/* Bottom gold banner: "We'll get it done, like us there are none" */}
            <div className="slide-2-badge-gold">
              We'll get it done, like us there are none
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="rev-arrow rev-prev"
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          aria-label="Previous Slide"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="rev-arrow rev-next"
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          aria-label="Next Slide"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Navigation Bullets */}
        <div className="rev-bullets">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`rev-bullet ${currentSlide === idx ? 'selected' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {videoOpen && (
        <div className="video-modal-overlay" onClick={() => setVideoOpen(false)}>
          <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setVideoOpen(false)} aria-label="Close video">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="video-iframe-wrap">
              <iframe
                src="https://www.youtube.com/embed/FyS_zcvmUr4?autoplay=1"
                title="Why choose us video"
                frameBorder="0"
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
