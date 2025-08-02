import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ProductsInfoSection: React.FC = () => {
  const otherStones = [
    'Marble (White, Green, Imported)',
    'Sandstone',
    'Limestone',
    'Slate'
  ];

  const customizationServices = [
    'Custom sizing, edge finishing, & surface polishing',
    'Safe packaging & global shipping',
    'Consistent quality & on-time delivery'
  ];

  return (
    <section className="products-info-section">
      <div className="products-info-container">
        <div className="info-column">
          <h3>Other Stones</h3>
          <ul>
            {otherStones.map((stone, index) => (
              <li key={index}>
                <FaCheck className="check-icon" />
                <span>{stone}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="info-column">
          <h3>Customization & Export</h3>
          <ul>
            {customizationServices.map((service, index) => (
              <li key={index}>
                <FaCheck className="check-icon" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="info-column">
          <h3>Bulk Orders & Custom Enquiries</h3>
          <p>
            We can meet your exact requirements whether you're a wholesaler, architect, 
            builder, or interior designer. Contact us for catalogs, pricing, and samples 
            to find the perfect stone solution for your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsInfoSection; 