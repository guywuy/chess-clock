import React, { Component } from 'react';

import Half from './Half';
import CenterButton from './CenterButton';
import StopButton from './StopButton';
import SettingsButton from './SettingsButton';
import SettingsScreen from './SettingsScreen';
import ModeSet from './ModeSet';
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
      'showGameOverText' : false,
      'showSettingsScreen' : false,
      'modeIsSet' : false,
      'timeIsSet' : false,
      'currentlyActive' : 'none',
      'mode' : 'standard',
      'muted' : true,
      'rotated' : false
    }

    this.handleCenterButtonClick = this.handleCenterButtonClick.bind(this);
    this.handleHalfClick = this.handleHalfClick.bind(this);
    this.handleMuteClick = this.handleMuteClick.bind(this);
    this.handleRotateClick = this.handleRotateClick.bind(this);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleStopConfirmation = this.handleStopConfirmation.bind(this);
    this.handleStopCancellation = this.handleStopCancellation.bind(this);
    // this.handleSettingsFinish = this.handleSettingsFinish.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleModeSet = this.handleModeSet.bind(this);
    this.handleBackToModeSet = this.handleBackToModeSet.bind(this);
    this.handleTimeSet = this.handleTimeSet.bind(this);
    this.endGame = this.endGame.bind(this);
    this.resetAndStartGame = this.resetAndStartGame.bind(this);
    this.playSound = this.playSound.bind(this);
    this.pauseSound = this.pauseSound.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.timerEnded = this.timerEnded.bind(this);

    // Add popstate listener, so that back button press will return user to modeset screen
    window.addEventListener('popstate', ev => {
      this.resetAndStartGame();
      this.handleBackToModeSet();
    }, false);
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

  handleRotateClick(){
    this.setState({
      'rotated' : !this.state.rotated
    });
  }

  handleSettingsClick(){
    this.setState({
      'showSettingsScreen' : !this.state.showSettingsScreen
    });
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
    this.resetAndStartGame();
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
    let muted = this.state.muted;

    if (which === 'pause'){
      if (!muted){
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
        if (!muted){
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
        if (!muted){
          this.playSound('ticking');
        }

        this.startTimer();
      })
    }
  }

  startTimer(){

    // Currently active
    let current = this.state.currentlyActive;
    let tr = `timeRemaining_${current}`;
    
    // Not active (used in hourglass mode)
    let inactive = current === 'one' ? 'two' : 'one';
    let trInactive = `timeRemaining_${inactive}`;

    this.intervalTimer = setInterval(()=>{
      // If timeRemaining has ran out, end game
      if (this.state[tr]<=0){
        this.timerEnded()
      } else {

        // LOGIC DEPENDING ON GAME MODE
        if (this.state.mode === 'standard'){
          // If game is standard mode
          this.setState((prevState)=>{
            return {
              [tr] : --prevState[tr]
            }
          })
        } else if (this.state.mode === 'hourglass'){
          // If game is hourglass mode, add time to time remaining for inactive
          this.setState((prevState)=>{
            return {
              [tr] : --prevState[tr],
              [trInactive] : ++prevState[trInactive]
            }
          })
        } else {
          // If game is countdown mode, reset inactive half time to timeTotal.
          let timeTotalInactive = `timeTotal_${inactive}`;
          this.setState((prevState)=>{
            return {
              [tr] : --prevState[tr],
              [trInactive] : prevState[timeTotalInactive]
            }
          })
        }

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
      'showStopGameConfirmation' : false,
      'showGameOverText' : true
    })
  }

  resetAndStartGame(){
    this.stopTimer();
    this.setState({
      'inProgress' : false,
      'paused' : false,
      'modeIsSet' : false,
      'timeIsSet' : false,
      'showStopGameConfirmation' : false,
      'currentlyActive' : 'none',
      'timeRemaining_one' : this.state.timeTotal_one,
      'timeRemaining_two' : this.state.timeTotal_two,
      'showGameOverText' : false
    })
  }

  handleModeSet(ev){
    this.setState({
      'modeIsSet' : true,
    })
  }

  handleBackToModeSet(){  
    this.setState({
      'modeIsSet' : false,
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

  handleModeChange(selectedMode){
    this.setState({
      'mode' : selectedMode
      })
  }

  formatTime(millis){
    let time = Math.round(millis/10);
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
      <div className={ this.state.rotated ? "app rotated" : "app" }>

        { this.state.timeIsSet && 
        <Half 
          id='one'
          active = {this.state.currentlyActive === 'one'}
          totalTime = {this.state.timeTotal_one}
          timeRemaining = {this.formatTime(this.state.timeRemaining_one)}
          percentComplete = {100 - (this.state.timeRemaining_one*100 / this.state.timeTotal_one).toFixed(1)}
          onClick = {this.handleHalfClick}
        />
        }

        { this.state.timeIsSet && 
        <Half 
          id='two'
          active = {this.state.currentlyActive === 'two'}
          totalTime = {this.state.timeTotal_two}
          timeRemaining = {this.formatTime(this.state.timeRemaining_two)}
          percentComplete = {100 - (this.state.timeRemaining_two*100 / this.state.timeTotal_two).toFixed(1)}
          onClick = {this.handleHalfClick}
        />
        }

        <div className={ this.state.paused && !this.state.showStopGameConfirmation ? 'buttons highlight' : 'buttons' }>

          <StopButton 
            onClick = {this.handleStopClick} 
          />

          <CenterButton 
            started = {this.state.inProgress }
            paused = {this.state.paused}
            onClick = {this.handleCenterButtonClick}
          />


          <SettingsButton 
            onClick = {this.handleSettingsClick}
            />

        </div>

        { this.state.showSettingsScreen && 
        <SettingsScreen 
          onFinished={this.handleSettingsClick}
          onRotateClick = {this.handleRotateClick} 
          onMuteClick = {this.handleMuteClick} 
          muted = {this.state.muted}
        /> 
        }

        { this.state.showStopGameConfirmation && 
        <Confirmation 
          onConfirm={this.handleStopConfirmation}
          onCancel={this.handleStopCancellation}
        /> 
        }

        { !this.state.modeIsSet && 
        <ModeSet onSubmit={this.handleModeSet} onHandleModeChange={this.handleModeChange} mode={this.state.mode} />
        }

        { this.state.modeIsSet && !this.state.timeIsSet && 
        <TimeSet onSubmit={this.handleTimeSet} mode={this.state.mode} back={this.handleBackToModeSet} />
        }

        { this.state.showGameOverText &&
          <svg xmlns="http://www.w3.org/2000/svg" className="game-over-text">
            <text x="50%" y="45%" textAnchor="middle" fill="#fff" onClick={ this.resetAndStartGame } className="game-over-text__title">TIME UP!</text>
            <text x="50%" y="70%" textAnchor="middle" fill="#fff" onClick={ this.resetAndStartGame } className="game-over-text__subtitle">Play again?</text>
          </svg>
        }

      </div>
    );
  }
}

export default App;
