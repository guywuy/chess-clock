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
      'timeTotal_one' : 600,
      'timeTotal_two' : 600,
      'timeRemaining_one' : 600,
      'timeRemaining_two' : 600
    }

    this.handleClick = this.handleClick.bind(this);

    var intervalTimerOne;
  }

  handleClick(which){
    console.log(which);
    if (which === 'one'){
      if (this.state.paused) return;
      this.stopTimer();
      this.setState({
        'currentlyActive' : 'two'
      })
      this.startTimerTwo();
    } else if (which === 'two'){
      if (this.state.paused) return;
      this.stopTimer();
      this.setState({
        'currentlyActive' : 'one'
      })
      this.startTimerOne();
    } else if (which === 'pause'){
      this.stopTimer();
      this.setState({
        'paused' : true
      })
    } else if (which === 'resume'){
      this.state.currentlyActive === 'one' ? this.startTimerOne() : this.startTimerTwo();
      this.setState({
        'paused' : false
      })
    } else if (which === 'start'){
      this.startTimerOne();
      this.setState({
        'currentlyActive' : 'one',
        'inProgress' : true,
        'paused' : false
      })
    }
  }

  startTimerOne(){
    let current = this.state.currentlyActive;
    let tr = `timeRemaining_one`;

    this.intervalTimer = setInterval(()=>{
      // if (this.state.timeRemaining<=1){
      //   this.timerEnded();
      // } else {
        this.setState((prevState)=>{
          return {
            [tr] : --prevState[tr]
          }
        })
      // }
    }, 1000)
  }
  startTimerTwo(){
    let current = this.state.currentlyActive;
    let tr = `timeRemaining_two`;

    this.intervalTimer = setInterval(()=>{
      // if (this.state.timeRemaining<=1){
      //   this.timerEnded();
      // } else {
        this.setState((prevState)=>{
          return {
            [tr] : --prevState[tr]
          }
        })
      // }
    }, 1000)
  }

  stopTimer(){
    clearInterval(this.intervalTimer);
  }

  timerEnded(){
    alert('Timer Ended!');
  }

  formatTime(time){
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    return `${minutes} : ${seconds === 0 ? '00' : seconds}`;
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
