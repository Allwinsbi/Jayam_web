import React, { useState } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    quote: "Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job. I felt like Lavish Gardens really listened to what I wanted, gave me ideas, and helped me decide how to make my backyard a place to relax and enjoy the view.",
    author: "Richard Dowson",
    avatar: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/team1.jpg"
  },
  {
    id: 2,
    quote: "“I just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS. It means a great deal to me that you all come to the table every week with smiles on your faces and ready to solve whatever issue.”",
    author: "Lisa Jordan",
    avatar: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/team2.jpg"
  },
  {
    id: 3,
    quote: "Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team of project managers, supervisors, and their support teams can't be rivaled by any other contractor I have worked with over the past 15 years.",
    author: "Michael Anderson",
    avatar: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/team3.jpg"
  }
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials-header-wrapper">
          <span className="watermark-number center">06</span>
          <span className="section-tagline">SEE WHAT SAYS OUR HAPPY CLIENTS</span>
          <h2 className="section-title">Our happy customers</h2>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="testimonial-slider-container">
          <div className="testimonial-card">
            {/* Avatar with yellow offset shadow */}
            <div className="testimonial-avatar-wrapper">
              <img
                src={testimonials[currentIdx].avatar}
                alt={testimonials[currentIdx].author}
                className="testimonial-avatar-img"
              />
            </div>

            {/* Content & Quote text */}
            <div className="testimonial-content">
              <i className="fa-solid fa-quote-left testimonial-quote-icon"></i>
              <p className="testimonial-quote-text">
                {testimonials[currentIdx].quote}
              </p>
              <h4 className="testimonial-author-name">
                - {testimonials[currentIdx].author}
              </h4>
            </div>
          </div>

          {/* Testimonial Dots Navigation */}
          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`testimonial-dot ${currentIdx === idx ? 'active' : ''}`}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
