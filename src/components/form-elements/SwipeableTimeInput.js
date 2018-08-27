import React, { Component } from 'react';
import Swipeable from 'react-swipeable';

class SwipeableTimeInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      'value' : this.props.defaultValue
    }

    this.onChange = this.onChange.bind(this);
    this.swiping = this.swiping.bind(this);

  }

  formatTime(millis){
    let time = Math.round(millis/10);
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    return `${minutes}m:${seconds < 10 ? '0' + seconds + 's' : seconds + 's'}`;
  }

  swiping(e, deltaX, deltaY, absX, absY, velocity) {

    let change = (deltaY * velocity * this.props.step);
    
    // If positive change, and value is still less than max, add change to value, vice versa for negative change
    if ((change > 0 && this.state.value < this.props.max) || (change < 0 && this.state.value > this.props.min)){
      
      let newValue = this.state.value + (change / 10);

      if (this.props.step === 0.1) {
        newValue = Math.round(newValue * 100) / 100;
      } else {
        newValue = Math.round(newValue * 10) / 10;
      }

      this.setState({ 'value' : newValue });
      
    }

  }
  
  onChange(e) {
    this.setState({'value' : e.target.value});
  }

  render() {
    return (
      <div className={`timesetter__time-input timesetter__time-input--${this.props.name}`}>
        <Swipeable
        onSwiping={this.swiping} 
        >
          <label htmlFor={ this.props.id }>{ this.props.label }</label>
          <input 
            type='number' 
            name={ this.props.name }
            id= { this.props.id } 
            min={ this.props.min } 
            max={ this.props.max } 
            step="any"
            value={ this.state.value }
            onChange={ this.onChange }
          />
          <span>{ this.formatTime(this.state.value*600) }</span>
        </Swipeable>
      </div>
    )
  }
}

export default SwipeableTimeInput;
