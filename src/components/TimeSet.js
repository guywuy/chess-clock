import React from 'react';
import TimeInputController from './form-elements/TimeInputController.js';


export const TimeSet = ({
  onSubmit,
  mode,
  back
}) => {

  // Submit times for (one, two) in milliseconds
  function handleSubmit(ev){
    let oneMinutes = document.querySelector('#timeOne--minutes').value;
    let oneSeconds = document.querySelector('#timeOne--seconds').value;
    let twoMinutes = document.querySelector('#timeTwo--minutes').value;
    let twoSeconds = document.querySelector('#timeTwo--seconds').value;
    ev.preventDefault();

    if (window.localStorage) {
      localStorage.setItem(`previousSetting--${mode}--one--minutes`, oneMinutes)
      localStorage.setItem(`previousSetting--${mode}--one--seconds`, oneSeconds)
      localStorage.setItem(`previousSetting--${mode}--two--minutes`, twoMinutes)
      localStorage.setItem(`previousSetting--${mode}--two--seconds`, twoSeconds)
    }

    let timeOneToSubmit = Math.floor((oneMinutes * 600) + (oneSeconds * 10));
    let timeTwoToSubmit = Math.floor((twoMinutes * 600) + (twoSeconds * 10));

    onSubmit( timeOneToSubmit, timeTwoToSubmit);
  }

  // Default time is object with minutes and seconds with values depending on the mode
  const defaultTime = mode === 'standard' ? { 'minutes' : 10, 'seconds' : 0 } : { 'minutes' : 1, 'seconds' : 30 };

  function getDefaultValue(whichInput, whichTimeUnit){

    if (!window.localStorage) {
      return defaultTime[whichTimeUnit];
    }

    // Check if value is in local storage. If not, return default
    if (!(localStorage.getItem(`previousSetting--${mode}--one--${whichTimeUnit}`) || localStorage.getItem(`previousSetting--${mode}--two--${whichTimeUnit}`)) ) {
      return defaultTime[whichTimeUnit];
    } else {
      let time = localStorage.getItem(`previousSetting--${mode}--${whichInput}--${whichTimeUnit}`);
      return Number(time);
    }

  }

  return (
    <div className='overlay timesetter'>
      <form action='' onSubmit={handleSubmit}>
        <h1>Set Times</h1>
        
        <div className="timesetter__options-selector">
          <TimeInputController 
            name='one' 
            idBase='timeOne' 
            label='White' 
            defaultValueMinutes={ getDefaultValue('one', 'minutes') }
            defaultValueSeconds={ getDefaultValue('one', 'seconds') }
            />

          <TimeInputController 
            name='two' 
            idBase='timeTwo' 
            label='Black' 
            defaultValueMinutes={ getDefaultValue('two', 'minutes') }
            defaultValueSeconds={ getDefaultValue('two', 'seconds') }
          />
          
        </div>
        <div className="timesetter__button-container">
          <button type="button" className='button button--secondary' onClick={back}> Back </button>
          <button type='submit' className='button'> Go! </button>
        </div>
      </form>
    </div>
  );
}


export default TimeSet;
