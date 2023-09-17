import React from 'react';
import './Testimonials.css';
import testimonial1 from '../../assets/testimonial1.jpg'
import TestimonialCard from './TestimonialCard';

const TESTIMONIALCARDS = [
  {
    rating: '5',
    img: testimonial1,
    name: 'Name',
    text: 'Good stuff'
  },
  {
    rating: '4',
    img: testimonial1,
    name: 'Name',
    text: 'Good stuff'
  },
  {
    rating: '4',
    img: testimonial1,
    name: 'Name',
    text: 'Good stuff'
  },
  {
    rating: '4',
    img: testimonial1,
    name: 'Name',
    text: 'Good stuff'
  }
]

const Testimonials = () => {
    return (
      <div className='background-primary'>
        <div className='container container--column testimonials'>
          <div className='testimonial-title'><h4>Testimonials</h4></div>
          <div className='testimonial-cards'>
            {TESTIMONIALCARDS.map(card => 
              <TestimonialCard {...card}></TestimonialCard>)
            }
          </div>
        </div>
      </div>
    );
}

export default Testimonials;
