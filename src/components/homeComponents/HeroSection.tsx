import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import homeBanner1 from "../../assets/images/bannerImages/home_banner1.jpg"
import homeBanner2 from "../../assets/images/bannerImages/home_banner2.jpg"
import homeBanner3 from "../../assets/images/bannerImages/home_banner3.jpg"
import homeBanner4 from "../../assets/images/bannerImages/home_banner4.jpg"

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: homeBanner1,
      title: "Premium Granite & Quartz Solutions",
      subtitle: "Delivering Quality Natural Stones for Timeless Beauty & Durability",
      description: "Discover our extensive collection of premium granite and quartz materials, crafted to perfection for your dream projects."
    },
    {
      image: homeBanner2,
      title: "Exquisite Marble Collections",
      subtitle: "Timeless Elegance in Every Slab",
      description: "From classic white marble to exotic patterns, our marble collection brings sophistication to any space."
    },
    {
      image: homeBanner3,
      title: "Professional Stone Solutions",
      subtitle: "Expert Craftsmanship Meets Innovation",
      description: "Our team of skilled professionals ensures precision cutting and flawless installation for every project."
    },
    {
      image: homeBanner4,
      title: "Global Export Excellence",
      subtitle: "Worldwide Quality Stone Distribution",
      description: "Serving international markets with premium stone products and exceptional customer service worldwide."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-overlay">
              <div className="carousel-content" key={`content-${currentSlide}`}>
                <h1 className="carousel-title">{slide.title}</h1>
                <p className="carousel-subtitle">{slide.subtitle}</p>
                <p className="carousel-description">{slide.description}</p>
                <div className="carousel-buttons">
                  <Link to="/products" className="btn btn-primary">
                    Explore Our Products
                  </Link>
                  <Link to="/contact" className="btn btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
