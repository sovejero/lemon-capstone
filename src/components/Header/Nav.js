import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <Link className="nav-button nav-button--text" to="/home">Home</Link>
            <Link className="nav-button nav-button--text" to="/about">About</Link>
            <Link className="nav-button nav-button--text" to="/menu">Menu</Link>
            <Link className="nav-button nav-button--text" to="/reservations">Reservations</Link>
            <Link className="nav-button nav-button--text" to="/orderonline">Order Online</Link>
            <Link className="nav-button nav-button--text" to="/login">Login</Link>
        </nav>
    );
}

export default Nav;
