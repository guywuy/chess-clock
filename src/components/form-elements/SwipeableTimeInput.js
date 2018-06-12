import React, { Component } from 'react';
import Swipeable from 'react-swipeable';

class SwipeableTimeInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      'value' : this.props.defaultValue
    }

    this.onChange = this.onChange.bind(this);
    this.swipingUp = this.swipingUp.bind(this);
    this.swipingDown = this.swipingDown.bind(this);

  }

  swipingUp(e, absY) {
    // console.log("You're Swiping to the Up...", e, absY);
    if (this.state.value < this.props.max){
      this.setState({'value' : Math.round(this.state.value + absY/100)});
    }
  }

  swipingDown(e, absY) {
    // console.log("You're Swiping to the Up...", e, absY);
    if (this.state.value > this.props.min){
      this.setState({'value' : Math.round(this.state.value - absY/100)});
    }
  }
  
  onChange(e) {
    // console.log('value has changed');
    this.setState({'value' : e.target.value});
  }

  render() {
    return (
      <div className={`timesetter__time-input timesetter__time-input--${this.props.name}`}>
        <Swipeable
        onSwipingUp={this.swipingUp} 
        onSwipingDown={this.swipingDown} 
        >
          <label htmlFor={ this.props.id }>{ this.props.label }</label>
          <input 
            type='number' 
            name={ this.props.name }
            id= { this.props.id } 
            min={ this.props.min } 
            max={ this.props.max } 
            step={ this.props.step } 
            value={ this.state.value }
            onChange={ this.onChange }
          />
          <span>mins</span>
        </Swipeable>
      </div>
    )
  }
}

export default SwipeableTimeInput;
