import React from 'react';
import constructionEquipment from '../../assets/images/mining.png';
import roadConstruction from '../../assets/images/granite.png';
import engineers from '../../assets/images/marble.png';
import '../../styles/aboutPage.css';

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="service-card">
          <img 
            src={constructionEquipment} 
            alt="Construction Equipment" 
            className="service-image"
          />
          <h3>What We Offer</h3>
          <ul>
            <li>Wide range of Granite and Quartz varieties</li>
            <li>High-quality finishing and polishing</li>
            <li>Customized sizes & bulk orders</li>
            <li>Timely delivery for local & export markets</li>
          </ul>
        </div>
        
        <div className="service-card">
          <img 
            src={roadConstruction} 
            alt="Global Reach" 
            className="service-image"
          />
          <h3>Global Reach</h3>
          <ul>
            <li>We proudly export our materials to various countries including the USA, Europe, the Middle East, & Asia. Our efficient logistics & packaging ensure safe and secure delivery of all consignments.</li>
          </ul>
        </div>
        
        <div className="service-card">
          <img 
            src={engineers} 
            alt="Our Strengths" 
            className="service-image"
          />
          <h3>Our Strengths</h3>
          <ul>
            <li>Quality-focused approach</li>
            <li>Ethical sourcing practices</li>
            <li>Competitive pricing</li>
            <li>Dedicated customer support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;