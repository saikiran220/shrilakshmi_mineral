import  { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from '../../assets/images/logo.png'; // adjust path as needed

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Shri Lakshmi Minerals" />
        </Link>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>PRODUCTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>GALLERY</Link>
          </li>
          <li className="nav-item">
            <Link to="/global-export" className={`nav-link ${isActive('/global-export') ? 'active' : ''}`}>GLOBAL EXPORT</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav