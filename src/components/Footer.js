import React from 'react';
import './Footer.css';
import { Button } from './Button';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            <img src='images/logo.png' alt='PenGems Logo' className='logo-image' />
          </Link>
        </div>
          <small class='website-rights'>PenGems © 2025</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://en-gb.facebook.com/reg/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/accounts/emailsignup/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/i/flow/signup?lang=kn'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-x-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;