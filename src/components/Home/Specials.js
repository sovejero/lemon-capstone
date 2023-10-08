import React from 'react';
import './Specials.css';
import Button from '../Button';
import SpecialCard from './SpecialCard';
import greekSalad from '../../assets/greek-salad.png'

const CARDS = [
  {
    img: greekSalad,
    title: 'Greek Salad',
    price: 12.99,
    text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  },
  {
    img: greekSalad,
    title: 'Greek Salad',
    price: 12.99,
    text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  },
  {
    img: greekSalad,
    title: 'Greek Salad',
    price: 12.99,
    text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  }
] 

const Specials = () => {
    return (
      <div id="menu" className="background-secondary">
        <div className='container container--column'>
          <div className='specials-header'>
            <h2>This weeks specials!</h2>
            <Button title="Online Menu"></Button>
          </div>
          <div className='specials-cards'>
            {CARDS.map((card, index) => <SpecialCard key={index} {...card}></SpecialCard>)}
          </div>
        </div>
      </div>
    );
}

export default Specials;
