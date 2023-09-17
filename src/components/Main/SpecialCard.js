import React from 'react';
import './SpecialCard.css';

const SpecialCard = ({ img, title, price, text}) => {
    return (
      <div className="special-card">
        <img className="special-image" src={img} alt=''></img>
        <div className='special-body'>
          <div className='special-header'>
            <p>{title}</p>
            <span>$ {price}</span>
          </div>
          <span className='special-text'>{text}</span>
          <div className='special-cta'>
            <span>Order a Delivery</span>
            <img src='' alt=''></img>
          </div>
        </div>
      </div>
    );
}

export default SpecialCard;
