import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TiArrowRightThick } from "react-icons/ti";
import g27 from '../../assets/images/gallery_images/g27.png';
import blackGalaxy from '../../assets/images/colors/black-galaxy.png';
import colonialGoldGranite from '../../assets/images/colors/colonialgoldgranite.png';
import imperialRed from '../../assets/images/colors/imperialred.png';
import indianJuparana from '../../assets/images/colors/indianjuparana.png';
import ivoryBrownGranite from '../../assets/images/colors/ivory-brown-granite.png';
import kashmirWhiteGranite from '../../assets/images/colors/kashmirwhitegranite.png';
import moonWhite from '../../assets/images/colors/moonwhite.png';
import riverWhiteGranite from '../../assets/images/colors/riverwhitegranite.png';
import steelGreyGranite from '../../assets/images/colors/steelgreygranite.png';
import tanBrown from '../../assets/images/colors/tan-brown.png';

const GraniteSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const graniteImages = [
    blackGalaxy,
    colonialGoldGranite,
    imperialRed,
    indianJuparana,
    ivoryBrownGranite,
    kashmirWhiteGranite,
    moonWhite,
    riverWhiteGranite,
    steelGreyGranite,
    tanBrown,
    g27
  ];

  const graniteVarieties = [
    { name: 'Black Galaxy Granite', color: '#1a1a1a', backgroundImage: blackGalaxy, imageIndex: 0 },
    { name: 'Colonial Gold Granite', color: '#DAA520', backgroundImage: colonialGoldGranite, imageIndex: 1 },
    { name: 'Imperial Red Granite', color: '#8B0000', backgroundImage: imperialRed, imageIndex: 2 },
    { name: 'Indian Juparana Granite', color: '#8B4513', backgroundImage: indianJuparana, imageIndex: 3 },
    { name: 'Ivory Brown Granite', color: '#DEB887', backgroundImage: ivoryBrownGranite, imageIndex: 4 },
    { name: 'Kashmir White Granite', color: '#F5F5DC', backgroundImage: kashmirWhiteGranite, imageIndex: 5 },
    { name: 'Moon White Granite', color: '#F8F8FF', backgroundImage: moonWhite, imageIndex: 6 },
    { name: 'River White Granite', color: '#F5F5F5', backgroundImage: riverWhiteGranite, imageIndex: 7 },
    { name: 'Steel Grey Granite', color: '#708090', backgroundImage: steelGreyGranite, imageIndex: 8 },
    { name: 'Tan Brown Granite', color: '#A0522D', backgroundImage: tanBrown, imageIndex: 9 },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % graniteImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + graniteImages.length) % graniteImages.length);
  };

  const handleVarietyClick = (imageIndex: number) => {
    if (imageIndex !== undefined) {
      setCurrentImageIndex(imageIndex);
    }
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
                       style={{ 
                         backgroundColor: variety.color,
                         backgroundImage: variety.backgroundImage ? `url(${variety.backgroundImage})` : 'none',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         cursor: variety.imageIndex !== undefined ? 'pointer' : 'default'
                       }}
                       onClick={() => variety.imageIndex !== undefined && handleVarietyClick(variety.imageIndex)}
                     ></div>
                     <span>{variety.name}</span>
                   </div>
                 ))}
              </div>
              <div className="custom-cuts">
                                    <TiArrowRightThick className="check-icon" />
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