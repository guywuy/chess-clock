import React, { Component } from 'react';

import Half from './Half';
import Button from './Button';

class App extends Component {

  constructor(){
    super();

    //Times are in seconds.
    this.state = {
      'inProgress' : false,
      'paused' : false,
      'currentlyActive' : 'none',
      'timeTotal_one' : 10,
      'timeTotal_two' : 10,
      'timeRemaining_one' : 10,
      'timeRemaining_two' : 10
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(which){
    console.log(which);
    if (which === 'one'){
      if (this.state.paused) return;
      this.stopTimer();
      this.setState({
        'currentlyActive' : 'two'
      }, () => {
        this.startTimer();
      })
    } else if (which === 'two'){
      if (this.state.paused) return;
      this.stopTimer();
      this.setState({
        'currentlyActive' : 'one'
      }, () => {
        this.startTimer();
      })
    } else if (which === 'pause'){
      this.stopTimer();
      this.setState({
        'paused' : true
      })
    } else if (which === 'resume'){
      this.setState({
        'paused' : false
      }, () => {
        this.startTimer();
      })
    } else if (which === 'start'){
      this.setState({
        'currentlyActive' : 'one',
        'inProgress' : true,
        'paused' : false
      }, () => {
        this.startTimer();
      })
    }
  }

  startTimer(){
    let current = this.state.currentlyActive;
    let tr = `timeRemaining_${current}`;

    this.intervalTimer = setInterval(()=>{
      if (this.state[tr]<=0){
        this.timerEnded()
      } else {
        this.setState((prevState)=>{
          return {
            [tr] : --prevState[tr]
          }
        })
      }
    }, 1000)
  }

  stopTimer(){
    clearInterval(this.intervalTimer);
  }

  timerEnded(){
    alert('Timer Ended! ' + this.state.currentlyActive + ' lost!');
    this.stopTimer();
    this.setState({
      'inProgress' : false,
      'paused' : false,
      'currentlyActive' : 'none',
      'timeTotal_one' : 10,
      'timeTotal_two' : 10,
      'timeRemaining_one' : this.state.timeTotal_one,
      'timeRemaining_two' : this.state.timeTotal_two
    })
  }

  formatTime(time){
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }


  render() {
    return (
      <div className="app">

        <Half id='one'
        active = {this.state.currentlyActive === 'one'}
        totalTime = {this.state.timeTotal_one}
        timeRemaining = {this.formatTime(this.state.timeRemaining_one)}
        onClick = {this.handleClick}
        />

        <Half id='two'
        active = {this.state.currentlyActive === 'two'}
        totalTime = {this.state.timeTotal_two}
        timeRemaining = {this.formatTime(this.state.timeRemaining_two)}
        onClick = {this.handleClick}
        />

        <Button 
        started = { this.state.inProgress }
        paused = {this.state.paused}
        onClick = {this.handleClick}
        />

      </div>
    );
  }
}

export default App;
