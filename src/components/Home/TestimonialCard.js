import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({rating, img, name, text}) => {
    return (
      <div className='background-secondary'>
        <div className='card-body'>
          <p>{rating}</p>
          <div className='card-middle'>
            <img src={img} alt='' height="46px"></img>
            <p>{name}</p>
          </div>
          <div>{text}</div>
        </div>
      </div>
    );
}

export default TestimonialCard;
