import React, { Component } from 'react';

import Half from './Half';
import MuteButton from './MuteButton';
import CenterButton from './CenterButton';
import StopButton from './StopButton';
import TimeSet from './TimeSet';
import Confirmation from './Confirmation';

class App extends Component {

  constructor(){
    super();

    //Times are in milliseconds.
    this.state = {
      'inProgress' : false,
      'paused' : false,
      'showStopGameConfirmation' : false,
      'timeIsSet' : false,
      'currentlyActive' : 'none',
      'timeTotal_one' : 3000,
      'timeTotal_two' : 3000,
      'timeRemaining_one' : 3000,
      'timeRemaining_two' : 3000,
      'muted' : false
    }

    this.handleCenterButtonClick = this.handleCenterButtonClick.bind(this);
    this.handleHalfClick = this.handleHalfClick.bind(this);
    this.handleMuteClick = this.handleMuteClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleStopConfirmation = this.handleStopConfirmation.bind(this);
    this.handleStopCancellation = this.handleStopCancellation.bind(this);
    this.handleTimeSet = this.handleTimeSet.bind(this);
    this.endGame = this.endGame.bind(this);
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

  handleMuteClick(){
    if (!this.state.muted){
      this.pauseSound('ticking');
    } else {
      if (this.state.inProgress && !this.state.paused){
        this.playSound('ticking');
      }
    }
    this.setState({
      'muted' : !this.state.muted
    })
  }

  handleStopClick(){
    if (!this.state.muted){
      this.pauseSound('ticking');
    };
    this.stopTimer();
    this.setState({
      'showStopGameConfirmation': true,
      'paused' : true
    });
  }

  handleStopConfirmation(){
    this.endGame()
  }

  handleStopCancellation(){
    if (!this.state.muted){
      this.playSound('ticking');
    }
    this.startTimer();
    this.setState({
      'showStopGameConfirmation': false,
      'paused' : false
    });
  }

  handleCenterButtonClick(which){
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
    }, 100)
  }

  stopTimer(){
    clearInterval(this.intervalTimer);
  }

  timerEnded(){
    if (!this.state.muted){
      this.pauseSound('ticking');
      this.playSound('whistle');
    }
    this.endGame();
  }

  endGame() {
    this.stopTimer();
    this.setState({
      'inProgress' : false,
      'paused' : false,
      'timeIsSet' : false,
      'showStopGameConfirmation' : false,
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

  formatTime(millis){
    let time = Math.floor(millis/10);
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

        <Half 
          id='one'
          active = {this.state.currentlyActive === 'one'}
          totalTime = {this.state.timeTotal_one}
          timeRemaining = {this.formatTime(this.state.timeRemaining_one)}
          onClick = {this.handleHalfClick}
        />

        <Half 
          id='two'
          active = {this.state.currentlyActive === 'two'}
          totalTime = {this.state.timeTotal_two}
          timeRemaining = {this.formatTime(this.state.timeRemaining_two)}
          onClick = {this.handleHalfClick}
        />

        <MuteButton 
          muted = {this.state.muted}
          onClick = {this.handleMuteClick} 
        />

        <CenterButton 
          started = {this.state.inProgress }
          paused = {this.state.paused}
          onClick = {this.handleCenterButtonClick}
        />

        <StopButton 
          onClick = {this.handleStopClick} 
        />

        { this.state.showStopGameConfirmation && 
        <Confirmation 
          onConfirm={this.handleStopConfirmation}
          onCancel={this.handleStopCancellation}
        /> 
        }

        { !this.state.timeIsSet && 
        <TimeSet onSubmit={this.handleTimeSet} />
        }

      </div>
    );
  }
}

export default App;
