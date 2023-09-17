import React from 'react';
import './About.css';
import img from '../../assets/marioadrian.jpg'

const About = () => {
    return (
      <div className='background-secondary'>
        <div className='container about'>
          <div className='section-left'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p className='about-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className='section-right'>
            <img src={img} alt='mario and adrian cooking in the restaurant'></img>
          </div>
        </div>
      </div>
    );
}

export default About;
