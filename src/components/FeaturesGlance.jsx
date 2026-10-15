import React, { useState } from 'react';
import './FeaturesGlance.css';

const featureCards = [
  {
    id: 1,
    title: 'Building Engineering',
    description: 'A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.',
    link: '#services',
    bgImg: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/service-1.jpg'
  },
  {
    id: 2,
    title: 'Safety First',
    description: 'Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety in hospitals.',
    link: '#services',
    bgImg: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/service-2.jpg'
  },
  {
    id: 3,
    title: 'Road Construction',
    description: 'The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.',
    link: '#services',
    bgImg: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/service-3.jpg'
  }
];

export default function FeaturesGlance() {
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <section className="features-glance-section">
      <div className="container">
        
        <div className="features-icon-header">
          <img
            src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/safety-icon.png"
            alt="Safety Helmet Icon"
            className="safety-helmet-img"
          />
        </div>

        <span className="section-tagline">FEATURES AT A GLANCE</span>
        <h2 className="section-title light">We know what your needs are</h2>

        
        <div className="feature-cards-grid">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className={`feature-card-wrapper ${flippedCard === card.id ? 'is-flipped' : ''}`}
              onMouseEnter={() => setFlippedCard(card.id)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div className="feature-card-inner">
                <div
                  className="feature-card-front"
                  style={{ backgroundImage: `url(${card.bgImg})` }}
                >
                  <div className="card-front-bar">
                    <span className="card-title-text">{card.title}</span>
                    <i className="fa-solid fa-chevron-up card-arrow"></i>
                  </div>
                </div>
                <div
                  className="feature-card-back"
                  style={{
                    backgroundImage: `linear-gradient(rgba(244,192,59,0.95), rgba(244,192,59,0.95)), url(${card.bgImg})`
                  }}
                >
                  <div className="card-back-content">
                    <h3 className="card-back-title">{card.title}</h3>
                    <p className="card-back-text">{card.description}</p>
                    <a href={card.link} className="btn-white card-back-btn">
                      Learn More ...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
