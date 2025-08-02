import React from 'react';
import { FaPlay } from 'react-icons/fa';

const GalleryGrid: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      alt: 'Dark gray marble slab with white and gold veins',
      hasVideo: false
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'Three vertical stone slabs in display rack',
      hasVideo: true,
      videoTime: '0:15 / 0:30'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      alt: 'Stack of various cut stone pieces',
      hasVideo: false
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'Black marble slab with gold and white veins',
      hasVideo: false
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      alt: 'Person using circular saw to cut stone',
      hasVideo: false
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'Hands examining stone samples',
      hasVideo: false
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      alt: 'Another black marble slab',
      hasVideo: false
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'Stack of white and light brown stone slabs',
      hasVideo: false
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      alt: 'Hand holding dark green stone slab',
      hasVideo: true,
      videoTime: '0:05 / 0:15'
    }
  ];

  return (
    <section className="gallery-grid-section">
      <div className="gallery-grid-container">
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-item-image">
                <img src={item.src} alt={item.alt} />
                {item.hasVideo && (
                  <div className="video-overlay">
                    <div className="play-button">
                      <FaPlay />
                    </div>
                    <div className="video-time">
                      {item.videoTime}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid; 