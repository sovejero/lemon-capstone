import React from 'react';
import './Hero.css';
import heroImg from '../../assets/hero-image.png';
import Button from '../Button';

const Hero = () => {
    return (
      <div className="background-primary">
        <div className='container'>
          <div className="hero">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p className="hero-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button title="Reserve a Table"></Button>
          </div>
          <div className='hero-image-wrapper'>
            <img className="hero-image" alt="bruchetta" src={heroImg}></img>
          </div>
        </div>
      </div>
    );
}

export default Hero;
