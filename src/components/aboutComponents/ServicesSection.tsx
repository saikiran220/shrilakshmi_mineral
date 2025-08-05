import React from 'react';
import constructionEquipment from '../../assets/images/mining.png';
import roadConstruction from '../../assets/images/granite.png';
import engineers from '../../assets/images/marble.png';
import { FaGem, FaTools, FaTruck, FaGlobe, FaAward, FaUsers, FaShieldAlt } from 'react-icons/fa';
import '../../styles/aboutPage.css';

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="service-card">
          <div className="service-image-container">
            <img 
              src={constructionEquipment} 
              alt="Construction Equipment" 
              className="service-image"
            />
            <div className="service-overlay">
              <FaTools className="service-icon" />
            </div>
          </div>
          <h3>What We Offer</h3>
          <div className="service-features">
            <div className="feature-item">
              <FaGem className="feature-icon" />
              <span>Wide range of Granite and Quartz varieties</span>
            </div>
            <div className="feature-item">
              <FaTools className="feature-icon" />
              <span>High-quality finishing and polishing</span>
            </div>
            <div className="feature-item">
              <FaTruck className="feature-icon" />
              <span>Customized sizes & bulk orders</span>
            </div>
            <div className="feature-item">
              <FaGlobe className="feature-icon" />
              <span>Timely delivery for local & export markets</span>
            </div>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-image-container">
            <img 
              src={roadConstruction} 
              alt="Global Reach" 
              className="service-image"
            />
            <div className="service-overlay">
              <FaGlobe className="service-icon" />
            </div>
          </div>
          <h3>Global Reach</h3>
          <div className="service-features">
            <div className="feature-item">
              <FaAward className="feature-icon" />
              <span>We proudly export our materials to various countries including the USA, Europe, the Middle East, & Asia. Our efficient logistics & packaging ensure safe and secure delivery of all consignments.</span>
            </div>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-image-container">
            <img 
              src={engineers} 
              alt="Our Strengths" 
              className="service-image"
            />
            <div className="service-overlay">
              <FaShieldAlt className="service-icon" />
            </div>
          </div>
          <h3>Our Strengths</h3>
          <div className="service-features">
            <div className="feature-item">
              <FaAward className="feature-icon" />
              <span>Quality-focused approach</span>
            </div>
            <div className="feature-item">
              <FaShieldAlt className="feature-icon" />
              <span>Ethical sourcing practices</span>
            </div>
            <div className="feature-item">
              <FaGem className="feature-icon" />
              <span>Competitive pricing</span>
            </div>
            <div className="feature-item">
              <FaUsers className="feature-icon" />
              <span>Dedicated customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;