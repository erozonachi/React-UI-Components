import React from 'react';
import './Button.css';

const NumberButton = (props) => (
  <button
    className={props.buttonStyle}
    onClick={props.text !== '='? () => props.clickHandler(props.text) : () => props.resultHandler()}
  >
    {props.text === '*'? 'x' : (props.text === '/'? '÷' : props.text)}
  </button>
);

export default NumberButton;
