
import { Link } from "react-router-dom"
import { FaPhone, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"

const ContactNav = () => {
  return (
    <div className="contact-nav">
      <div className="contact-nav-container">
        <div className="social-links">
        <a href="tel:98668 68606" className="phone-link">
            <FaPhone className="icon" />
            98668 68606
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram className="icon" />
          </a>
       
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook className="icon" />
          </a>
          <a href="https://wa.me/9866868606" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaWhatsapp className="icon" />
          </a>
          <Link to="/contact" className="request-quote-btn">
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactNav
