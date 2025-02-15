import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import insta from '../Assets/instagram_icon.png';
import pintrest from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" />
        <p>Amazon</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={insta} alt="icon" />
        </div>
        <div className="footer-icon-container">
          <img src={pintrest} alt="icon" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp} alt="icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
