import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navMenu = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '#about' },
    { title: 'Menu', path: '#menu' },
    { title: 'Reservations', path: '/booking' },
    { title: 'Order Online', path: '##' },
    { title: 'Login', path: '##' }
  ];

  return (
    <nav className="nav">
      {navMenu.map(({title, path}) => 
        <NavLink key={title} className="nav-button nav-button--text" to={path}>
          {title}
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
