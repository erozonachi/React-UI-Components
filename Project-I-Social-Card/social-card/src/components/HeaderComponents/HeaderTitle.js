import React from 'react';
import './Header.css';

const HeaderTitle = (props) => (
  <div>
    <h1>{props.title}</h1>
    <span>{props.handle} <sup>.</sup> {props.timeStamp}</span>
  </div>
);

export default HeaderTitle;
