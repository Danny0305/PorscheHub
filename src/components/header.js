import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideOutMenu from '../components/slideOutMenu';
import "../styles/components/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div>
        <SlideOutMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      <div className="site-name-container">
        <h1 className="site-name">PorscheHub</h1>        
      </div>

      <div className="user-buttons">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;