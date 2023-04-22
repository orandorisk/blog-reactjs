import React from 'react';
import './footer.scss';

import {Logo} from '../../../assets/index.js';
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa';

const Icon = () => {
  const icon = [FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaDiscord, FaGithub];
  return (
    <div className='social-wrapper'>
      {icon.map((IconComponent, index) => (
        <div key={index} className='icon-wrapper'>
          <IconComponent className='icon-medsos'/>
        </div>
      ))}
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <div className='footer'>
          <div>
            <img src={Logo} alt='blog' className='logo'/>
          </div>
          <div>
            <Icon />
          </div>
      </div>
      <div className='copyright'>
        <p>Copyright@2023</p>
      </div>
    </div>
  )
}

export default Footer