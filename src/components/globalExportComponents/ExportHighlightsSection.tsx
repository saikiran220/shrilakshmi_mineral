import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ExportHighlightsSection: React.FC = () => {
  return (
    <section className="export-highlights-section">
      <div className="export-highlights-container">
        <div className="export-highlights-content">
          <div className="what-we-offer">
            <h3>What We Offer</h3>
            <ul>
              <li>
                <FaCheck className="check-icon" />
                <span>International-Grade Granite, Quartz, & Marble</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Custom Sizes, Finishes & Packaging</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Secure Wooden Crate Packing</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>CIF FOB Shipping from Major Indian Ports</span>
              </li>
            </ul>
          </div>
          
          <div className="export-highlights">
            <h3>Export Highlights</h3>
            <ul>
              <li>
                <FaCheck className="check-icon" />
                <span>Direct Supply to Contractors & Builders</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Flexible MOQ (Minimum Order Quantities)</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Custom Clearance & Documentation support</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Shipping from Chennai, Visakhapatnam, Kandla, & Mundra Ports</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="world-map-background">
          <div className="cargo-ship-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default ExportHighlightsSection; 