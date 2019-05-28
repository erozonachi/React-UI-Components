import React from 'react';
import './Group.css';
import '../ButtonComponents/NumberButton';
import NumberButton from '../ButtonComponents/NumberButton';

const ButtonGroup = (props) => (
  <div 
  className={props.groupStyle}
>
  {props.buttons.map(btn => <NumberButton key={`${btn.id}`} buttonStyle={btn.style} text={btn.text} clickHandler={props.clickHandler} resultHandler={props.resultHandler} />)}
</div>
);

export default ButtonGroup;
