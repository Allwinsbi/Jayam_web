import React from 'react';
import './ProcessSection.css';

const processSteps = [
  {
    id: 1,
    title: 'Agency / Bidding',
    description: 'Slogan creation for your construction company is crucial for the overall branding.',
    icon: 'fa-solid fa-file-contract'
  },
  {
    id: 2,
    title: 'Construction',
    description: 'Slogan creation for your construction company is crucial for the overall branding.',
    icon: 'fa-solid fa-person-digging'
  },
  {
    id: 3,
    title: 'Project Execution',
    description: 'Slogan creation for your construction company is crucial for the overall branding.',
    icon: 'fa-solid fa-building-circle-check'
  }
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container process-container">
        
        <div className="process-image-column">
          <div className="process-image-border"></div>
          <div className="process-image-wrapper">
            <img
              src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/process.jpg"
              alt="Construction Process Crane"
              className="process-main-image"
            />
          </div>
        </div>

        
        <div className="process-content-column">
          <div className="process-watermark-wrapper">
            <span className="watermark-number">03</span>
            <span className="section-tagline align-left">PROCESS OF CONSTRUCTION</span>
          </div>

          <h2 className="process-heading">
            How it works in construction?
          </h2>

          <div className="process-steps-list">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step-item">
                <div className="step-icon-box">
                  <i className={step.icon}></i>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
