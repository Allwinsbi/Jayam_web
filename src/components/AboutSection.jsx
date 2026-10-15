import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  const checklists = [
    'General Contracting',
    'Building Construction',
    'Design and Build',
    'Renovation',
    'Preconstruction',
    'Road Construction'
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        <div className="about-image-column">
          <div className="about-yellow-backdrop"></div>
          <div className="about-image-wrapper">
            <img
              src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/about-company.jpg"
              alt="About Our Company Construction Site"
              className="about-main-image"
            />
          </div>
        </div>
        <div className="about-content-column">
          <div className="about-watermark-wrapper">
            <span className="watermark-number">01</span>
            <span className="section-tagline align-left">ABOUT OUR COMPANY</span>
          </div>

          <h2 className="about-heading">
            Always dedicated and devoted
          </h2>

          <p className="about-lead-text">
            Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it on social media and related building communities.
          </p>

          <ul className="about-checklist">
            {checklists.map((item, idx) => (
              <li key={idx} className="about-check-item">
                <i className="fa-solid fa-check check-icon"></i>
                <span className="check-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
