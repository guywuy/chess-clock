import React, { Component } from 'react';
import Confirmation from './Confirmation';


class StopButton extends Component {
  constructor(){
    super();

    this.state = {
      'showConfirmation' : false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleConfirmation = this.handleConfirmation.bind(this)
  }
  
  handleClick(){
    this.setState({
      'showConfirmation' : true
    })
  }

  handleCancel(){
    console.log(this);
    this.setState({ 
      'showConfirmation' : !this.state.showConfirmation
    })
  }

  handleConfirmation(ev){

    this.setState({
      'showConfirmation' : false
    }, () => {
      this.props.onClick();
    })
  }
  
  render() {
    return (
      <div className='button--stop-container'>

        { this.state.showConfirmation && 
        <Confirmation 
        onClick={this.handleConfirmation}
        onCancel={this.handleCancel}
        /> 
        }
        
        <div className='button--stop' onClick={this.handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60" height="60">
            <circle cx="256" cy="256" r="256" fill="orange"/>
            <g fill="#fff">
              <path d="M151.3 168.3l17-17 192.3 192.4-17 17z"/>
              <path d="M151.3 343.7l192.4-192.3 17 17-192.4 192.3z"/>
            </g>
          </svg>
          Cancel
        </div>
      </div>
    );
  }
}


export default StopButton;
