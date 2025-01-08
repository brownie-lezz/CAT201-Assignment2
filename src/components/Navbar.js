import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src="images/logo.png"
            alt="PenGems Logo"
            className="navbar-logo"
            onClick={() => scrollToSection('home')}
          />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <span className="nav-links" onClick={() => scrollToSection('heritage')}>
                Heritage
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-links" onClick={() => scrollToSection('nature')}>
                Nature
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-links" onClick={() => scrollToSection('food')}>
                Food and Beverages
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-links" onClick={() => scrollToSection('accommodations')}>
                Accommodations
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
