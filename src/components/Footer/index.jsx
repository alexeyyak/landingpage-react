import React from 'react';

import google from '../../assets/img/socials/Google.svg';
import twitter from '../../assets/img/socials/Twitter.svg';
import facebook from '../../assets/img/socials/Facebook.svg';
import footer from '../../assets/img/footer.svg';

import Section from './Section';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-socials'>
        <h3>ARShakir</h3>
        <div className='footer-socials-icons'>
          <a href='/#'>
            <img src={google} alt='social-icon' />
          </a>
          <a href='/#'>
            <img src={twitter} alt='social-icon' />
          </a>
          <a href='/#'>
            <img src={facebook} alt='social-icon' />
          </a>
        </div>
      </div>
      <div className='footer-grid'>
        <Section title='First' />
        <Section title='Second' />
        <Section title='Third' />
        <Section title='Fourth' />
      </div>
      <div className='footer-copyright'>
        <p>© Copyrights 2021</p>
        <p>Privacy policy</p>
        <p>Terms of service</p>
      </div>
      <img className='footer-img' src={footer} alt='' />
    </div>
  );
}
