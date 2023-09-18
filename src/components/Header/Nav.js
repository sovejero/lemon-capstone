import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink className="nav-button nav-button--text" to="/">Home</NavLink>
            <NavLink className="nav-button nav-button--text" to="#about">About</NavLink>
            <NavLink className="nav-button nav-button--text" to="#menu">Menu</NavLink>
            <NavLink className="nav-button nav-button--text" to="/booking">Reservations</NavLink>
            <NavLink className="nav-button nav-button--text" to="##">Order Online</NavLink>
            <NavLink className="nav-button nav-button--text" to="##">Login</NavLink>
        </nav>
    );
}

export default Nav;
