import { Link } from 'react-router-dom';
import miningImage from '../../assets/images/middle.png';

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
              <span className="check-icon">✓</span>
              High-Quality Natural Stone Selection
            </li>
            <li>
              <span className="check-icon">✓</span>
              Competitive Pricing & Timely Delivery
            </li>
            <li>
              <span className="check-icon">✓</span>
              Customized Sizing & Finishing
            </li>
            <li>
              <span className="check-icon">✓</span>
              Expert Guidance & Support
            </li>
            <li>
              <span className="check-icon">✓</span>
              Global Export Capabilities
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PremiumComponent;