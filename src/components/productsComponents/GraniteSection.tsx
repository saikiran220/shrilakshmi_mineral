import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';

const GraniteSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const graniteImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop'
  ];

  const graniteVarieties = [
    { name: 'Black Galaxy', color: '#1a1a1a' },
    { name: 'Absolute Black', color: '#000000' },
    { name: 'Tan Brown', color: '#8B4513' },
    { name: 'Steel Grey', color: '#708090' },
    { name: 'Absolute Black', color: '#000000' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % graniteImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + graniteImages.length) % graniteImages.length);
  };

  return (
    <section className="granite-section">
      <div className="granite-container">
        <div className="granite-content">
          <div className="granite-text">
            <h3>01. Granite</h3>
            <p>
              Granite stones are ideal for flooring, countertops, wall cladding, and monuments. 
              Known for their exceptional strength and variety, granite offers a perfect blend of 
              durability and aesthetic appeal for both residential and commercial applications.
            </p>
            
            <div className="granite-varieties">
              <h4>Popular Varieties</h4>
              <div className="variety-swatches">
                {graniteVarieties.map((variety, index) => (
                  <div key={index} className="variety-swatch">
                    <div 
                      className="color-swatch" 
                      style={{ backgroundColor: variety.color }}
                    ></div>
                    <span>{variety.name}</span>
                  </div>
                ))}
              </div>
              <div className="custom-cuts">
                <FaCheck className="check-icon" />
                <span>Custom cuts & finishes available</span>
              </div>
            </div>
          </div>
          
          <div className="granite-image-container">
            <div className="granite-image-wrapper">
              <img 
                src={graniteImages[currentImageIndex]} 
                alt="Granite slab" 
                className="granite-image"
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

export default GraniteSection; 