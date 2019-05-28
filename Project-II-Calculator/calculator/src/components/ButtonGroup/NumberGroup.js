import React from 'react';
import './Group.css';
import NumberButton from '../ButtonComponents/NumberButton';

const NumberGroup = (props) => (
  <div 
    className='number-group'
  >
    {props.buttons.map(group => {
      return (
          <div
          className='group-row'
          key={group[0].id}
          >
            {group.map(btn => <NumberButton key={`${btn.id}`} buttonStyle={btn.style} text={btn.text} clickHandler={props.clickHandler} />)}
        </div>
      );
    })}
 </div>
);

export default NumberGroup;
