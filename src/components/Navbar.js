import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src="images/logo.png"
            alt="PenGems Logo"
            className="navbar-logo"
          />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="food"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={closeMenu}
              >
                Food and Beverages
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="nature"
                spy={true}
                smo   o th={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={closeMenu}
              >
                Nature
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="heritage"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={closeMenu}
              >
                Heritage
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="accommodations"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={closeMenu}
              >
                Accommodations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
