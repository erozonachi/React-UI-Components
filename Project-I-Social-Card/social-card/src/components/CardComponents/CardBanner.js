import React from 'react';
import './Card.css';

const CardBanner = (props) => (
  <div className='banner'>
    <img src={props.url} alt='React Banner' />
  </div>
);

export default CardBanner;
