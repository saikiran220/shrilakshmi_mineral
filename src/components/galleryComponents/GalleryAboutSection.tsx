import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const GalleryAboutSection: React.FC = () => {
  return (
    <section className="gallery-about-section">
      <div className="gallery-about-container">
        <div className="gallery-about-content">
          <h2>Gallery – Our Natural Stone Creations</h2>
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
        
        <div className="gallery-brochures-section">
          <h3>Our Brochures</h3>
          
          <a href="#" className="gallery-brochure-item">
            <div className="gallery-brochure-icon">
              <FaFilePdf />
            </div>
            <div className="gallery-brochure-details">
              <h4>COMPANY BROCHURE</h4>
              <span>1 MB, PDF</span>
            </div>
          </a>
          
          <a href="#" className="gallery-brochure-item">
            <div className="gallery-brochure-icon">
              <FaFilePdf />
            </div>
            <div className="gallery-brochure-details">
              <h4>PRICE LIST</h4>
              <span>499 KB, PDF</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryAboutSection; 