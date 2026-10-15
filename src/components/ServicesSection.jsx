import React from 'react';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    title: 'Building',
    text: 'A building, or edifice, is a structure with a roof and walls standing.',
    icon: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/s1.png',
    link: '#services'
  },
  {
    id: 2,
    title: 'Road Construction',
    text: 'Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.',
    icon: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/s2.png',
    link: '#services'
  },
  {
    id: 3,
    title: 'Maintenance',
    text: 'All are assigned responsibilities relate to the maintenance mode.',
    icon: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/s3.png',
    link: '#services'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="services-header-wrapper">
          <span className="watermark-number center">02</span>
          <span className="section-tagline">WHAT WE CAN DO FOR YOU</span>
          <h2 className="section-title">Our construction services</h2>
        </div>

        
        <div className="services-grid">
          {services.map((item) => (
            <div key={item.id} className="service-card">
              <div className="service-icon-box">
                <img src={item.icon} alt={item.title} className="service-icon-img" />
              </div>

              <h3 className="service-card-title">
                <a href={item.link}>{item.title}</a>
              </h3>

              <p className="service-card-text">{item.text}</p>

              <a href={item.link} className="service-card-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
