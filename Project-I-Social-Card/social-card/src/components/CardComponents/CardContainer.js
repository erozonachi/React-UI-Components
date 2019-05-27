import React from 'react';
import './Card.css';
import './CardBanner';
import './CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const cardInfo = {
  url: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png',
  heading: 'Get started with React',
  text: 'React makes it painless to create interactive UIs. Design simple views for each state in your application.',
  reactURL: 'reactjs.org',
};
const CardContainer = (props) => (
  <a 
    href={props.url}
  >
   <CardBanner url={cardInfo.url} />
   <CardContent heading={cardInfo.heading} text={cardInfo.text} reactURL={cardInfo.reactURL} />
  </a>
);

export default CardContainer;
