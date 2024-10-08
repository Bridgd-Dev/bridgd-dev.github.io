import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';


const Footer = () => {

  const location = useLocation();

  const handleScrollToTop = (e, target) => {
    e.preventDefault();
    if (location.pathname === target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = target;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company Information</h3>
          <p>Bridg’d is dedicated to bridging education with real-world experience, empowering students and professionals through project-based learning.</p>
          <h4>Quick Links</h4>
          <ul className="quick-links">
            <li><a href="/" onClick={(e) => handleScrollToTop(e, '/')}>Home</a></li>
            <li><a href="/contact" onClick={(e) => handleScrollToTop(e, '/contact')}>Contact</a></li>
            <li><a href="">FAQs</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:info@bridgd.com">info@bridgd.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
          <p style={{ paddingTop: '20px' }}>
            <a href=""><u>Terms of Service</u></a> 
            <span style={{ margin: '0 20px' }}></span> 
            <a href=""><u>Privacy Policy</u></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;