import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/global-export">GLOBAL EXPORT</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>
        
        <div className="footer-bottom">
          <p>© 2025 shrilakshmiminerals.com. All Rights Reserved. <Link to="/privacy-policy" className="privacy-link">Privacy Policy</Link></p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FcGoogle /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}