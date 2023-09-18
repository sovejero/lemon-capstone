import React from 'react';
import './Header.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
      <header className="background-secondary">
        <div className='container header'>
          <Link className="header-logo-wrapper" to="/">
            <img className="header-logo" src={logo} alt="Logo" />
          </Link>
          <Nav />
        </div>
      </header>
    );
}

export default Header;

