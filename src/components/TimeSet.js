import React from 'react';
import RadioItem from './form-elements/RadioItem.js';

export const TimeSet = ({
  onSubmit,
  onHandleModeChange,
  mode
}) => {
  
  // function handleModeChange(value){
  //   onHandleModeChange(ev.target.value);
  // }

  function handleSubmit(ev){
    onSubmit( Math.floor(ev.target.one.value*600), Math.floor(ev.target.two.value*600));
  }


  return (
    <div className='overlay timesetter'>
      <form action='' onSubmit={handleSubmit}>
        <h1>Set Times</h1>

        <div className="timesetter__mode-selector">
          <RadioItem
          className={`timesetter__mode-radio timesetter__mode-radio--standard ${mode==='standard' ? 'timesetter__mode-radio--active' : ''}`}
          value="standard"
          name="mode"
          handleChange={onHandleModeChange}
          label="Standard Mode"
          description="Time decreases normally"
          checked={mode==='standard'}
          />
          <RadioItem
          className={`timesetter__mode-radio timesetter__mode-radio--hourglass ${mode==='hourglass' ? 'timesetter__mode-radio--active' : ''}`}
          value="hourglass"
          name="mode"
          handleChange={onHandleModeChange}
          label="Hourglass Mode"
          description="Time is added to the inactive player"
          checked={mode==='hourglass'}
          />
          <RadioItem
          className={`timesetter__mode-radio timesetter__mode-radio--three ${mode==='permove' ? 'timesetter__mode-radio--active' : ''}`}
          value="permove"
          name="mode"
          handleChange={onHandleModeChange}
          label="Per Move Mode"
          description="Time is per move, reset each move"
          checked={mode==='permove'}
          />
        </div>
        
        <div className="timesetter__time-input timesetter__time-input--one">
          <label htmlFor="timeOne">White</label>
          <input type='number' name='one' id='timeOne' min="0.2" max="60" step="0.2" defaultValue="4" />
          <span>mins</span>
        </div>
        <div className="timesetter__time-input timesetter__time-input--two">
          <label htmlFor="timeOne">Black</label>
          <input type='number' name='two' id='timeTwo' min="0.2" max="60" step="0.2" defaultValue="4" />
          <span>mins</span>
        </div>
        <button type='submit' className='button'> Yes </button>
      </form>
    </div>
  );
}


export default TimeSet;
