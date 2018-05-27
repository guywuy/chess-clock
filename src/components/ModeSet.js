import React from 'react';
import RadioItem from './form-elements/RadioItem.js';

export const ModeSet = ({
  onHandleModeChange,
  onSubmit,
  mode
}) => {

  return (
    <div className='overlay timesetter'>
      <form action='' onSubmit={onSubmit}>
        <h1>Choose Mode</h1>

        <div className="timesetter__options-selector">
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
          className={`timesetter__mode-radio timesetter__mode-radio--three ${mode==='countdown' ? 'timesetter__mode-radio--active' : ''}`}
          value="countdown"
          name="mode"
          handleChange={onHandleModeChange}
          label="Countdown Mode"
          description="Time is per move, reset each move"
          checked={mode==='countdown'}
          />

        </div>
          
        <button type='submit' className='button'> Yes </button>

      </form>
    </div>
  );
}


export default ModeSet;
