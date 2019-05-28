import React, {Component,} from 'react';
import './App.css';
import './components/DisplayComponents/CalculatorDisplay';
import './components/ButtonComponents/ActionButton';
import './components/ButtonGroup/ButtonGroup';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      displayText: '0',
    }
    this.numberButtons = [
      {id: 1, style: 'number-btn bold-font', text: '1'},
      {id: 2, style: 'number-btn bold-font', text: '2'},
      {id: 3, style: 'number-btn bold-font', text: '3'},
      {id: 4, style: 'number-btn bold-font', text: '4'},
      {id: 5, style: 'number-btn bold-font', text: '5'},
      {id: 6, style: 'number-btn bold-font', text: '6'},
      {id: 7, style: 'number-btn bold-font', text: '7'},
      {id: 8, style: 'number-btn bold-font', text: '8'},
      {id: 9, style: 'number-btn bold-font', text: '9'},
    ];
    this.operatorButtons = [
      {id: 1, style: 'operator-btn', text: '÷'},
      {id: 2, style: 'operator-btn', text: 'x'},
      {id: 3, style: 'operator-btn', text: '-'},
      {id: 4, style: 'operator-btn', text: '+'},
      {id: 5, style: 'operator-btn', text: '='},
    ];
  }

  render() {
    return (
      <div className='calc-container'>
        <CalculatorDisplay displayStyle='calc-display' text={this.state.displayText} />
        <div className='btn-container'>
          <div className='numbers'>
            <ActionButton buttonStyle='action-btn' text='clear' />
            <ButtonGroup groupStyle='group-row' buttons={this.numberButtons} />
            <ActionButton buttonStyle='action-btn bold-font' text='0' />
          </div>
          <ButtonGroup groupStyle='group-column' buttons={this.operatorButtons} />
        </div>
      </div>
    );
  }
}

export default App;
