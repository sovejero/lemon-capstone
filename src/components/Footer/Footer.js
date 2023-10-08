import React from 'react';
import './Footer.css';
import logo2 from '../../assets/logo-squared.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="background-primary">
      <div className="container footer">
        <div><img className="footer-logo" src={logo2} alt="Logo" /></div>

        <div className='footer-menu'>
            <div className="footer-title">Doormat Navigation</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order-online">Order Online</Link>
            <Link to="/login">Login</Link>
        </div>

        <div className='footer-menu'>
          <div className="footer-title">Contact</div>
          <div>False Street 123</div>
          <div>123456789</div>
          <div>contact@little-lemon</div>
        </div>

        <div className='footer-menu'>
          <div className="footer-title">Social Media Links</div>
          <div>Social Media</div>
          <div>Social Media 2</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
