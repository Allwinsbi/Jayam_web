import React from 'react';
import './PartnersSection.css';

const partnersLogos = [
  { id: 1, img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-4.png', name: 'Partner 1' },
  { id: 2, img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-5.png', name: 'Partner 2' },
  { id: 3, img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-3.png', name: 'Partner 3' },
  { id: 4, img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-1.png', name: 'Partner 4' },
  { id: 5, img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-2.png', name: 'Partner 5' }
];

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-yellow-banner">
          <div className="partners-grid">
            {partnersLogos.map((partner) => (
              <div key={partner.id} className="partner-logo-item">
                <img src={partner.img} alt={partner.name} className="partner-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
