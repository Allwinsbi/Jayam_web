import React, { useEffect, useState } from "react";
import "./Hero.css";

const SECOND_SLIDE_IMAGE =
  "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/slide-2.jpg";
const MAN_MODEL_IMAGE =
  "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/man-model.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % 2);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((previous) => (previous === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide((previous) => (previous === 0 ? 1 : 0));
  };

  return (
    <section id="home" className="hero-revslider-wrapper" aria-label="Hero Slider">
      <div className="hero-revslider-canvas">
        
        <div
          className={`hero-rev-slide slide-1 ${currentSlide === 0 ? "active" : ""}`}
          aria-hidden={currentSlide !== 0}
        >
          
          <div className="hero-revslider-grid">
            
            <div className="rs-man-layer">
              <img
                src="/man-model.png"
                alt="Construction worker"
                className="rs-man-img"
                draggable="false"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = MAN_MODEL_IMAGE;
                }}
              />
            </div>

            
            <div className="rs-skew-shape rs-shape-24" />
            <div className="rs-skew-shape rs-shape-23" />
            <div className="rs-skew-shape rs-shape-25" />

            
            <div className="rs-content-container">
              <div className="rs-text-block">
                <h1 className="rs-layer-heading">
                  <span className="heading-line line-dark">START</span>
                  <span className="heading-line line-dark">NEW</span>
                  <span className="heading-line line-gold">PROJECTS</span>
                </h1>

                <p className="rs-layer-subheading">
                  Don’t get framed by the competition,
                  <br />
                  trust our solid reputation.
                </p>

                
                <button
                  type="button"
                  className="rs-video-group"
                  onClick={() => setVideoOpen(true)}
                  aria-label="Watch video: Why choose us?"
                >
                  <span className="rs-play-btn" aria-hidden="true">
                    <span className="rs-play-triangle" />
                  </span>

                  <span className="rs-play-labels">
                    <span className="rs-play-sub">Watch video</span>
                    <span className="rs-play-main">Why choose us?</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div
          className={`hero-rev-slide slide-2 ${currentSlide === 1 ? "active" : ""}`}
          style={{ backgroundImage: `url("${SECOND_SLIDE_IMAGE}")` }}
          aria-hidden={currentSlide !== 1}
        >
          <div className="slide-2-dim-overlay" />

          <div className="slide-2-center-box">
            <div className="slide-2-ribbon dark-ribbon">
              Committed to superior quality and results
            </div>

            <div className="slide-2-ribbon gold-ribbon">
              We&apos;ll get it done, like us there are none
            </div>
          </div>
        </div>

        
        <div className="rs-arrows-group" aria-label="Slider Navigation">
          <button
            type="button"
            className="rs-nav-arrow rs-arrow-left"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            &#10094;
          </button>

          <button
            type="button"
            className="rs-nav-arrow rs-arrow-right"
            onClick={handleNext}
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>
      </div>

      
      {videoOpen && (
        <div
          className="video-modal-backdrop"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="video-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Why choose us video"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close-btn"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
            >
              &times;
            </button>

            <div className="video-responsive-holder">
              <iframe
                src="https://www.youtube.com/embed/FyS_zcvmUr4?autoplay=1"
                title="Why choose us"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
