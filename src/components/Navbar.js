import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            PenGems
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'nav-item'>
              <Link to='/heritage' className='nav-links' onClick={closeMenu}>
                Heritage
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to='/nature' className='nav-links' onClick={closeMenu}>
                Nature
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to='/food-beverages' className='nav-links' onClick={closeMenu}>
                Food and Beverages
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to='/accomodations' className='nav-links' onClick={closeMenu}>
                Accomodations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
