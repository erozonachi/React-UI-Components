import React from 'react';
import './Card.css';

const CardContent = (props) => (
  <div className='card-text'>
    <h3>{props.heading}</h3>
    <p>{props.text}</p>
    <span>{props.reactURL}</span>
  </div>
);

export default CardContent;
