import { Link } from 'react-router-dom';
import { TiArrowRightThick } from "react-icons/ti";
import miningImage from '../../assets/images/gallery_images/middle_image.png';

const PremiumComponent = () => {
  return (
    <section className="premium-section">
      <div className="premium-container">
        <div className="premium-left">
          <h2>Looking for premium natural stones for your next project?</h2>
          <p>Contact Shri Lakshmi Minerals today for samples, pricing, or custom requirements!</p>
          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
        </div>

        <div className="premium-middle">
          <img src={miningImage} alt="Mining Operations" />
        </div>

        <div className="premium-right">
          <h2>Why Choose Us?</h2>
          <ul className="benefits-list">
            <li>
              <TiArrowRightThick className="check-icon" />
              <span>High-Quality Natural Stone Selection</span>
            </li>
            <li>
              <TiArrowRightThick className="check-icon" />
              <span>Competitive Pricing & Timely Delivery</span>
            </li>
            <li>
              <TiArrowRightThick className="check-icon" />
              <span>Customized Sizing & Finishing</span>
            </li>
            <li>
              <TiArrowRightThick className="check-icon" />
              <span>Expert Guidance & Support</span>
            </li>
            <li>
              <TiArrowRightThick className="check-icon" />
              <span>Global Export Capabilities</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PremiumComponent;