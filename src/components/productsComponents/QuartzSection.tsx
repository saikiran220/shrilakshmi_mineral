import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';

const QuartzSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const quartzImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
  ];

  const quartzFeatures = [
    'Scratch & stain resistant',
    'Low maintenance',
    'Sleek, elegant appearance'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % quartzImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + quartzImages.length) % quartzImages.length);
  };

  return (
    <section className="quartz-section">
      <div className="quartz-container">
        <div className="quartz-content">
          <div className="quartz-text">
            <h3>02. Quartz</h3>
            <p>
              Quartz slabs are engineered for beauty and durability, perfect for kitchen tops, 
              vanities, and modern interiors. Available in uniform colors, patterns, and premium 
              finishes that enhance any space with sophistication and style.
            </p>
            
            <div className="quartz-features">
              <h4>Features</h4>
              <ul>
                {quartzFeatures.map((feature, index) => (
                  <li key={index}>
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="quartz-image-container">
            <div className="quartz-image-wrapper">
              <img 
                src={quartzImages[currentImageIndex]} 
                alt="Quartz kitchen countertop" 
                className="quartz-image"
              />
              <button className="nav-arrow nav-arrow-left" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              <button className="nav-arrow nav-arrow-right" onClick={nextImage}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuartzSection; 