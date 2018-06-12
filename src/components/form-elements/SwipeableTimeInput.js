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
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  swiping(e, deltaX, deltaY, absX, absY, velocity) {

    let change = Math.floor(deltaY/10);
    // console.log(change)

    if (change > 0 && this.state.value < this.props.max){

      this.setState({'value' : +(this.state.value + this.props.step).toFixed(1)});
      
    }

    if (change < 0 && this.state.value > this.props.min){

      this.setState({'value' : +(this.state.value - this.props.step).toFixed(1)});

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
            step={ this.props.step } 
            value={ this.state.value }
            onChange={ this.onChange }
          />
          {/* <span>mins</span> */}
          <span>{ this.formatTime(this.state.value*600) }</span>
        </Swipeable>
      </div>
    )
  }
}

export default SwipeableTimeInput;
