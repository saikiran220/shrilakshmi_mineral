import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const ProductsAboutSection: React.FC = () => {
  return (
    <section className="products-about-section">
      <div className="products-about-container">
        <div className="products-about-content">
          <h2>Our Products - Shri Lakshmi Minerals</h2>
          <p>
            Discover our premium range of natural stones that combine durability, elegance, and 
            exceptional finish. We offer a comprehensive selection of high-quality granite, quartz, 
            and other natural stones that are perfect for both residential and commercial applications.
          </p>
          <p>
            Each product in our collection is carefully selected and processed to meet international 
            standards, ensuring that you receive only the finest quality materials for your projects.
          </p>
        </div>
        
        <div className="products-brochures-section">
          <h3>Our Brochures</h3>
          
          <a href="#" className="products-brochure-item">
            <div className="products-brochure-icon">
              <FaFilePdf />
            </div>
            <div className="products-brochure-details">
              <h4>COMPANY BROCHURE</h4>
              <span>1 MB, PDF</span>
            </div>
          </a>
          
          <a href="#" className="products-brochure-item">
            <div className="products-brochure-icon">
              <FaFilePdf />
            </div>
            <div className="products-brochure-details">
              <h4>PRICE LIST</h4>
              <span>499 KB, PDF</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsAboutSection; 