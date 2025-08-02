import React from 'react';
import '../../styles/aboutPage.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          Looking for premium<br />
          natural stones for your next project?
        </h2>
        <p>
          Contact Shri Lakshmi Minerals today for samples, pricing, or<br />
          custom requirements!
        </p>
        <a href="#contact" className="cta-button">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTASection;