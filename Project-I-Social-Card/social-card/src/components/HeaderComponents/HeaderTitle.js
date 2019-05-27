import React from 'react';
import './Header.css';

const HeaderTitle = (props) => (
  <div className='title'>
    <h1>{props.title}</h1>
    <span>{props.handle} * {props.timeStamp}</span>
  </div>
);

export default HeaderTitle;
