import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    type: 'shapes',
    subtitle: 'Why choose us?',
    titleLines: ['START', 'NEW', 'PROJECTS'],
    highlightWord: 'PROJECTS',
    description: 'Don’t get framed by the competition,\ntrust our solid reputation.',
    modelImg: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/man-model.png',
    videoUrl: 'https://www.youtube.com/watch?v=FyS_zcvmUr4'
  },
  {
    id: 2,
    type: 'banner',
    bgImg: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/slide-2.jpg',
    box1: 'Committed to superior quality and results',
    box2: "We'll get it done, like us there are none",
    ctaText: 'Free Consultation'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div id="home" className="hero-slider-container">
      {/* Slide 1: Geometric Angle Blocks & Man Model */}
      <div className={`hero-slide slide-1 ${currentSlide === 0 ? 'active' : ''}`}>
        {/* Background yellow angled polygons */}
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>

        <div className="container hero-content-container">
          <div className="hero-left-col">
            <h1 className="hero-main-title">
              START<br />
              NEW<br />
              <span className="accent-yellow">PROJECTS</span>
            </h1>

            <p className="hero-desc">
              Don’t get framed by the competition, <br />
              trust our solid reputation.
            </p>

            <div className="hero-video-box">
              <a
                href="https://www.youtube.com/watch?v=FyS_zcvmUr4"
                target="_blank"
                rel="noreferrer"
                className="hero-play-btn"
                aria-label="Play Video"
              >
                <i className="fa-solid fa-play"></i>
              </a>
              <div className="hero-video-text">
                <span className="sub">Watch video</span>
                <span className="main">Why choose us?</span>
              </div>
            </div>
          </div>

          <div className="hero-right-col">
            <img
              src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/man-model.png"
              alt="Construction Professional"
              className="hero-model-img"
            />
          </div>
        </div>
      </div>

      {/* Slide 2: Photo Background with Distinctive Layered Text Badges */}
      <div 
        className={`hero-slide slide-2 ${currentSlide === 1 ? 'active' : ''}`}
        style={{ backgroundImage: `url(https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/slide-2.jpg)` }}
      >
        <div className="slide-2-overlay"></div>
        <div className="container slide-2-content">
          <div className="slide-2-badge dark-badge">
            Committed to superior quality and results
          </div>
          <div className="slide-2-badge yellow-badge">
            We'll get it done, like us there are none
          </div>
          <a href="#contact" className="btn-primary slide-2-btn">
            Free Consultation
          </a>
        </div>
      </div>

      {/* Slider Navigation Arrows / Dots */}
      <div className="slider-controls">
        <button 
          className="slider-arrow prev" 
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          aria-label="Previous Slide"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button 
          className="slider-arrow next" 
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          aria-label="Next Slide"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
