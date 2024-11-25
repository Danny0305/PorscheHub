import React, { useState } from 'react';
import '../styles/components/slideOutMenu.css'; // Custom CSS for the menu

const SlideOutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu button */}
      <button className="menu-icon" onClick={toggleMenu}>☰ Menu</button>

      {/* Slide-out menu */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>✖</button>
        <ul className="menu-items">
          <li><a href="/">Home</a></li>
          <li><a href="/models">Models</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      {/* Background overlay to dim the screen when menu is open */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default SlideOutMenu;
