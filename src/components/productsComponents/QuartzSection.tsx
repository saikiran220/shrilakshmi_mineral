import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TiArrowRightThick } from "react-icons/ti";
import quartz1 from '../../assets/images/quartz/quartz1.png';
import quartz2 from '../../assets/images/quartz/quartz2.png';
import quartz3 from '../../assets/images/quartz/quartz3.png';
import quartz4 from '../../assets/images/quartz/quartz4.png';

const QuartzSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const quartzImages = [
    quartz1,
    quartz2,
    quartz3,
    quartz4
  ];

  const quartzFeatures = [
    'Scratch & stain resistant',
    'Low maintenance',
    'Sleek, elegant appearance'
  ];

  // Auto-rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % quartzImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quartzImages.length]);

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
                    <TiArrowRightThick className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuartzSection; 