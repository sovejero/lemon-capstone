import React from 'react';
import './Home.css';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

const Main = () => {
    return (
        <div className="home">
          <Hero/>
          <Specials/>
          <Testimonials/>
          <About/>
        </div>
    );
}

export default Main;
