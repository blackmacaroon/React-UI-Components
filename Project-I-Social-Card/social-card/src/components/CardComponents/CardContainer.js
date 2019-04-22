import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
      return <div className='bottom'><a href='https://www.reactjs.org'>
                  <CardBanner />
                  <CardContent />
             </a></div>
};

export default CardContainer;