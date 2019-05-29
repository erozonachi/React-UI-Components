import React from 'react';
import './Button.css';

const ActionButton = (props) => (
  <button
    className={props.buttonStyle}
    onClick={props.text === '0'? () => props.clickHandler(props.text) : () => props.clickHandler()}
  >
    {props.text}
  </button>
);

export default ActionButton;
