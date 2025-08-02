import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const GlobalExportAboutSection: React.FC = () => {
  return (
    <section className="global-export-about-section">
      <div className="global-export-about-container">
        <div className="global-export-about-content">
          <h2>Global Export – Shri Lakshmi Minerals</h2>
          <p>
            Shri Lakshmi Minerals has established itself as a leading exporter of natural stones, 
            specializing in high-quality Granite and Quartz to international markets. With our 
            extensive network and years of experience, we ensure reliable logistics, secure 
            packaging, and comprehensive documentation for seamless global trade.
          </p>
          <p>
            Our commitment to quality and customer satisfaction has made us a trusted partner 
            for construction projects worldwide. We maintain strict quality control standards 
            and provide customized solutions to meet the specific requirements of our global clients.
          </p>
        </div>
        
        <div className="global-export-brochures-section">
          <h3>Our Brochures</h3>
          
          <a href="#" className="global-export-brochure-item">
            <div className="global-export-brochure-icon">
              <FaFilePdf />
            </div>
            <div className="global-export-brochure-details">
              <h4>COMPANY BROCHURE</h4>
              <span>1 MB, PDF</span>
            </div>
          </a>
          
          <a href="#" className="global-export-brochure-item">
            <div className="global-export-brochure-icon">
              <FaFilePdf />
            </div>
            <div className="global-export-brochure-details">
              <h4>PRICE LIST</h4>
              <span>499 KB, PDF</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GlobalExportAboutSection; 