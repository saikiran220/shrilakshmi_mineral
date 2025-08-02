import React from 'react';
import '../../styles/aboutPage.css';
import { FaFilePdf } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About Us – Shri Lakshmi Minerals</h2>
          <p>
            Shri Lakshmi Minerals is a trusted name in the natural stone industry, specializing in 
            the supply and export of high-quality Granite, Quartz, and other premium minerals. 
            Based in India, we have been delivering excellence to our clients across the globe 
            with a strong commitment to quality, reliability, and customer satisfaction.
          </p>
          <p>
            With years of experience and a deep understanding of the market, we cater to both 
            domestic and international clients by offering custom sizes, unique colors, and 
            durable materials suitable for construction, interior design, and architectural use.
          </p>
        </div>
        
        <div className="brochures-section">
          <h3>Our Brouchures</h3>
          
          <a href="#" className="brochure-item">
            <div className="brochure-icon">
              <FaFilePdf />
            </div>
            <div className="brochure-details">
              <h4>COMPANY BROCHURE</h4>
              <span>1 MB, PDF</span>
            </div>
          </a>
          
          <a href="#" className="brochure-item">
            <div className="brochure-icon">
              <FaFilePdf />
            </div>
            <div className="brochure-details">
              <h4>PRICE LIST</h4>
              <span>499 KB, PDF</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;