import React, { useEffect, useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navMenu = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '#about' },
    { title: 'Menu', path: '#menu' },
    { title: 'Reservations', path: '/booking' },
    { title: 'Order Online', path: '##' },
    { title: 'Login', path: '##' }
  ];

  useEffect(() => {
    //Prevents scrolling on mobile when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  },[isOpen]);

  return (
    <div className="nav-container">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
      <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
        {navMenu.map(({title, path}) => 
          <NavLink
          key={title}
          className="nav-button nav-button--text"
          to={path}
          onClick={() => setIsOpen(!isOpen)}
          >
            {title}
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Nav;
