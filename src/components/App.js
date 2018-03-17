import React, { Component } from 'react';

import Half from './Half';
import Button from './Button';
import TimeSet from './TimeSet';

class App extends Component {

  constructor(){
    super();

    //Times are in seconds.
    this.state = {
      'inProgress' : false,
      'paused' : false,
      'timeIsSet' : false,
      'currentlyActive' : 'none',
      'timeTotal_one' : 300,
      'timeTotal_two' : 300,
      'timeRemaining_one' : 300,
      'timeRemaining_two' : 300,
      'muted' : false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleHalfClick = this.handleHalfClick.bind(this);
    this.handleTimeSet = this.handleTimeSet.bind(this);
    this.playSound = this.playSound.bind(this);
    this.pauseSound = this.pauseSound.bind(this);
  }

  handleHalfClick(){
    if (this.state.paused) return;

    if (!this.state.muted){
      this.playSound('switch');
      this.playSound('ticking');
    }

    this.stopTimer();
    this.setState({
      'currentlyActive' : this.state.currentlyActive === 'one' ? 'two' : 'one'
    }, () => {
      this.startTimer();
    })
  }

  handleClick(which){
    if (which === 'pause'){
      if (!this.state.muted){
        this.pauseSound('ticking');
      }
      this.stopTimer();
      this.setState({
        'paused' : true
      })
    } else if (which === 'resume'){
      this.setState({
        'paused' : false
      }, () => {
        if (!this.state.muted){
          this.playSound('ticking');
        }
        this.startTimer();
      })
    } else if (which === 'start'){
      this.setState({
        'currentlyActive' : 'one',
        'inProgress' : true,
        'paused' : false
      }, () => {
        if (!this.state.muted){
          this.playSound('ticking');
        }

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
    if (!this.state.muted){
      this.pauseSound('ticking');
      this.playSound('whistle');
    }
    this.stopTimer();
    this.setState({
      'inProgress' : false,
      'paused' : false,
      'timeIsSet' : false,
      'currentlyActive' : 'none',
      'timeRemaining_one' : this.state.timeTotal_one,
      'timeRemaining_two' : this.state.timeTotal_two
    })
  }

  handleTimeSet(one, two){
   
    this.setState({
      'timeIsSet' : true,
      'timeTotal_one' : one,
      'timeTotal_two' : two,
      'timeRemaining_one' : one,
      'timeRemaining_two' : two
    })
  }

  formatTime(time){
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  playSound(id){
    let audio = document.getElementById(`audio_${id}`);
    audio.currentTime = 0;
    audio.play();
  }
  pauseSound(id){
    let audio = document.getElementById(`audio_${id}`);
    audio.pause();
  }


  render() {
    return (
      <div className="app">

        <Half id='one'
        active = {this.state.currentlyActive === 'one'}
        totalTime = {this.state.timeTotal_one}
        timeRemaining = {this.formatTime(this.state.timeRemaining_one)}
        onClick = {this.handleHalfClick}
        />

        <Half id='two'
        active = {this.state.currentlyActive === 'two'}
        totalTime = {this.state.timeTotal_two}
        timeRemaining = {this.formatTime(this.state.timeRemaining_two)}
        onClick = {this.handleHalfClick}
        />

        <Button 
        started = { this.state.inProgress }
        paused = {this.state.paused}
        onClick = {this.handleClick}
        />

        { !this.state.timeIsSet && 
        <TimeSet onSubmit={this.handleTimeSet} />
        }

      </div>
    );
  }
}

export default App;
