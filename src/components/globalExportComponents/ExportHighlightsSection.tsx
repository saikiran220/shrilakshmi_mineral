import React from 'react';
import { TiArrowRightThick } from "react-icons/ti";
import globalExportLeft from '../../assets/images/global_export_left.png';

const ExportHighlightsSection: React.FC = () => {
  return (
    <section className="export-highlights-section">
      <div className="export-highlights-container">
        <div className="export-highlights-left">
          <img src={globalExportLeft} alt="Global Export Logistics" className="global-export-image" />
        </div>
        
        <div className="export-highlights-right">
          <div className="what-we-offer">
            <h3>What We Offer</h3>
            <ul>
              <li>
                <TiArrowRightThick className="check-icon" />
                <span>International-Grade Granite, Quartz, & Marble</span>
              </li>
              <li>
                <TiArrowRightThick className="check-icon" />
                <span>Custom Sizes, Finishes & Packaging</span>
              </li>
              <li>
                <TiArrowRightThick className="check-icon" />
                <span>Secure Wooden Crate Packing</span>
              </li>
              <li>
                <TiArrowRightThick className="check-icon" />
                <span>CIF FOB Shipping from Major Indian Ports</span>
              </li>
            </ul>
          </div>
          
          <div className="export-highlights">
            <h3>Export Highlights</h3>
            <ul>
              <li>
                <TiArrowRightThick className="check-icon" />
                <span>Direct Supply to Contractors & Builders</span>
              </li>
              <li>
                <TiArrowRightThick className="check-icon" />
                <span>Flexible MOQ (Minimum Order Quantities)</span>
              </li>
              <li>
                <TiArrowRightThick className="check-icon" />
                <span>Custom Clearance & Documentation support</span>
              </li>
              <li>
                <TiArrowRightThick className="check-icon" />
                <span>Shipping from Chennai, Visakhapatnam, Kandla, & Mundra Ports</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportHighlightsSection; 