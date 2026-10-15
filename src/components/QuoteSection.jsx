import React, { useState } from 'react';
import './QuoteSection.css';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: 'Business Departemant',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        department: 'Business Departemant',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="quote-section">
      <div className="container quote-container">
        
        <div className="quote-left-info">
          <div className="quote-watermark-wrapper">
            <span className="watermark-number left-light">05</span>
            <span className="section-tagline align-left">INTERESTED IN CONSTRUCTION?</span>
          </div>

          <h2 className="quote-title">
            Request a free and fair quote
          </h2>

          <p className="quote-info-text">
            Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored, We hope that the above Construction Slogans.
          </p>

          <div className="quote-contact-points">
            <div className="quote-point">
              <i className="fa-solid fa-location-dot point-icon"></i>
              <div>
                <h4>Our Location</h4>
                <p>121 King Street, Melbourne Victoria 3000 Australia</p>
              </div>
            </div>

            <div className="quote-point">
              <i className="fa-solid fa-phone point-icon"></i>
              <div>
                <h4>Call Us Any Time</h4>
                <p>+1 (818) 23 45 678 / +1 (818) 23 45 679</p>
              </div>
            </div>

            <div className="quote-point">
              <i className="fa-solid fa-envelope point-icon"></i>
              <div>
                <h4>Email Address</h4>
                <p>info@xtratheme.com</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="quote-form-card">
          {submitted ? (
            <div className="form-success-banner">
              <i className="fa-solid fa-circle-check"></i>
              <h3>Thank You!</h3>
              <p>Your quote request has been sent successfully. We will get in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="quote-contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="quote-name">Your Name (required)</label>
                  <input
                    type="text"
                    id="quote-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quote-email">Your Email (required)</label>
                  <input
                    type="email"
                    id="quote-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="quote-subject">Subject</label>
                  <input
                    type="text"
                    id="quote-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quote-dept">Department</label>
                  <select
                    id="quote-dept"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  >
                    <option value="Business Departemant">Business Departemant</option>
                    <option value="Personal Departemant">Personal Departemant</option>
                    <option value="Support Departemant">Support Departemant</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="quote-msg">Your Message</label>
                <textarea
                  id="quote-msg"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary quote-submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
