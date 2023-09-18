import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({title, path=''}) => {
    return (
      <Link className="button" to={path}>{title}</Link>
    );
}

export default Button;
