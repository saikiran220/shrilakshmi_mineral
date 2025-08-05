import React, { useState } from 'react';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import all gallery images
import g1 from '../../assets/images/gallery_images/g1.png';
import g2 from '../../assets/images/gallery_images/g2.png';
import g3 from '../../assets/images/gallery_images/g3.png';
import g4 from '../../assets/images/gallery_images/g4.png';
import g5 from '../../assets/images/gallery_images/g5.png';
import g6 from '../../assets/images/gallery_images/g6.png';
import g7 from '../../assets/images/gallery_images/g7.png';
import g8 from '../../assets/images/gallery_images/g8.png';
import g9 from '../../assets/images/gallery_images/g9.png';
import g10 from '../../assets/images/gallery_images/g10.png';
import g11 from '../../assets/images/gallery_images/g11.png';
import g12 from '../../assets/images/gallery_images/g12.png';
import g13 from '../../assets/images/gallery_images/g13.png';
import g14 from '../../assets/images/gallery_images/g14.png';
import g15 from '../../assets/images/gallery_images/g15.png';
import g16 from '../../assets/images/gallery_images/g16.png';
import g17 from '../../assets/images/gallery_images/g17.png';
import g18 from '../../assets/images/gallery_images/g18.png';
import g19 from '../../assets/images/gallery_images/g19.png';
import g20 from '../../assets/images/gallery_images/g20.png';
import g21 from '../../assets/images/gallery_images/g21.png';
import g22 from '../../assets/images/gallery_images/g22.png';
import g23 from '../../assets/images/gallery_images/g23.png';
import g24 from '../../assets/images/gallery_images/g24.png';
import g25 from '../../assets/images/gallery_images/g25.png';
import g26 from '../../assets/images/gallery_images/g26.png';
import g27 from '../../assets/images/gallery_images/g27.png';
import g28 from '../../assets/images/gallery_images/g28.png';
import g29 from '../../assets/images/gallery_images/g29.png';
import g30 from '../../assets/images/gallery_images/g30.png';
import g31 from '../../assets/images/gallery_images/g31.png';

const GalleryGrid: React.FC = () => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: g1,
      alt: 'Natural stone quarry with large granite blocks',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 2,
      type: 'image',
      src: g2,
      alt: 'Dark grey granite block with quarry markings',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 3,
      type: 'image',
      src: g3,
      alt: 'Large marble quarry with water-filled excavation',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 4,
      type: 'image',
      src: g4,
      alt: 'Active quarry with heavy machinery and stone blocks',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 5,
      type: 'image',
      src: g5,
      alt: 'Stone quarry with organized block arrangement',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 6,
      type: 'image',
      src: g6,
      alt: 'Quarry operations with excavators and stone processing',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 7,
      type: 'image',
      src: g7,
      alt: 'Large stone blocks in quarry with machinery',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 8,
      type: 'image',
      src: g8,
      alt: 'Stone quarry with terraced walls and equipment',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 9,
      type: 'image',
      src: g9,
      alt: 'Quarry with multiple excavators and stone blocks',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 10,
      type: 'image',
      src: g10,
      alt: 'Stone processing area with organized block storage',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 11,
      type: 'image',
      src: g11,
      alt: 'Large scale quarry operations with heavy machinery',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 12,
      type: 'image',
      src: g12,
      alt: 'Stone quarry with water management and processing',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 13,
      type: 'image',
      src: g13,
      alt: 'Quarry with stone blocks and industrial equipment',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 14,
      type: 'image',
      src: g14,
      alt: 'Stone quarry with organized block layout',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 15,
      type: 'image',
      src: g15,
      alt: 'Quarry operations with stone processing equipment',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 16,
      type: 'image',
      src: g16,
      alt: 'Stone quarry with machinery and block storage',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 17,
      type: 'image',
      src: g17,
      alt: 'Large quarry with stone extraction operations',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 18,
      type: 'image',
      src: g18,
      alt: 'Stone quarry with organized block arrangement',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 19,
      type: 'image',
      src: g19,
      alt: 'Quarry with stone processing and machinery',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 20,
      type: 'image',
      src: g20,
      alt: 'Stone quarry operations with heavy equipment',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 21,
      type: 'image',
      src: g21,
      alt: 'Large scale stone extraction and processing',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 22,
      type: 'image',
      src: g22,
      alt: 'Stone quarry with organized block storage',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 23,
      type: 'image',
      src: g23,
      alt: 'Quarry operations with stone processing equipment',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 24,
      type: 'image',
      src: g24,
      alt: 'Stone quarry with machinery and block layout',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 25,
      type: 'image',
      src: g25,
      alt: 'Large quarry with stone extraction operations',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 26,
      type: 'image',
      src: g26,
      alt: 'Stone quarry with organized processing area',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 27,
      type: 'image',
      src: g27,
      alt: 'Quarry with stone blocks and industrial equipment',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 28,
      type: 'image',
      src: g28,
      alt: 'Stone quarry operations with heavy machinery',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 29,
      type: 'image',
      src: g29,
      alt: 'Large scale stone extraction and processing',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 30,
      type: 'image',
      src: g30,
      alt: 'Stone quarry with organized block storage',
      hasVideo: false,
      videoTime: undefined
    },
    {
      id: 31,
      type: 'image',
      src: g31,
      alt: 'Quarry operations with stone processing equipment',
      hasVideo: false,
      videoTime: undefined
    }
  ];

  const displayedItems = showAllImages ? galleryItems : galleryItems.slice(0, 9);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  const scrollToGallery = () => {
    const gallerySection = document.querySelector('.gallery-grid-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <section className="gallery-grid-section">
      <div className="gallery-grid-container">
        <div className="gallery-grid">
            {displayedItems.map((item, index) => (
            <div key={item.id} className="gallery-item">
                <div 
                  className="gallery-item-image"
                  onClick={() => {
                    if (!showAllImages && index === 8) {
                      setShowAllImages(true);
                    } else {
                      openModal(showAllImages ? index : index);
                    }
                  }}
                >
                <img src={item.src} alt={item.alt} />
                  {!showAllImages && index === 8 && (
                    <div className="see-more-overlay">
                      <div className="see-more-content">
                        <span className="see-more-text">See More</span>
                        <span className="image-count">+{galleryItems.length - 9} more</span>
                      </div>
                    </div>
                  )}

                {item.hasVideo && (
                  <div className="video-overlay">
                    <div className="play-button">
                      <FaPlay />
                    </div>
                    <div className="video-time">
                        {item.videoTime || '0:00'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
                     {!showAllImages && (
             <div className="gallery-load-more">
               <button 
                 className="load-more-btn"
                 onClick={() => setShowAllImages(true)}
               >
                 View All Images
               </button>
             </div>
           )}
           {showAllImages && (
             <div className="gallery-load-more">
               <button 
                 className="load-less-btn"
                 onClick={() => {
                   setShowAllImages(false);
                   setTimeout(scrollToGallery, 100);
                 }}
               >
                 See Less
               </button>
             </div>
           )}
      </div>
    </section>

      {/* Modal */}
      {modalOpen && (
        <div className="gallery-modal-overlay" onClick={closeModal} onKeyDown={handleKeyDown} tabIndex={0}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <div className="modal-image-container">
              <button className="modal-nav-btn modal-prev-btn" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              
              <div className="modal-image-wrapper">
                <img 
                  src={galleryItems[currentImageIndex].src} 
                  alt={galleryItems[currentImageIndex].alt}
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <span className="image-counter">
                    {currentImageIndex + 1} / {galleryItems.length}
                  </span>
                  <p className="image-alt">{galleryItems[currentImageIndex].alt}</p>
                </div>
              </div>
              
              <button className="modal-nav-btn modal-next-btn" onClick={nextImage}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid; 