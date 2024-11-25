import React from 'react';
import "../styles/components/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin, faYoutube, faPinterest, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Any questions ?</p>
          <Link to="/contact">
            <button className="action-button">Contact Form</button>
          </Link>          
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Latest news directly to your inbox.</p>
          <button className="action-button">Subscribe</button>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <p>Get in touch with us on all platforms.</p>
          <div className="social-media">
            <a href="https://www.facebook.com" className="social-button">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.x.com" className="social-button">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.instagram.com" className="social-button">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" className="social-button">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.youtube.com" className="social-button">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.pinterest.com" className="social-button">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="https://www.snapchat.com" className="social-button">
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PorscheHub. All rights reserved.</p>
        <h2 className="company">PorscheHub</h2>
      </div>  
    </footer>
  );
};

export default Footer;