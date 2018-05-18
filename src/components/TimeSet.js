import React from 'react';

export const TimeSet = ({
  onSubmit,
  onHandleModeChange,
  mode
}) => {
  
  function handleModeChange(ev){
    onHandleModeChange(ev.target.value);
  }

  function handleSubmit(ev){
    onSubmit( Math.floor(ev.target.one.value*600), Math.floor(ev.target.two.value*600));
  }


  return (
    <div className='overlay timesetter'>
      <form action='' onSubmit={handleSubmit}>
        <h1>Set Times</h1>

        <div className="timesetter__mode-selector">
          <div className={`timesetter__mode-selector--one ${mode==='standard' ? 'timesetter__mode-selector--active' : ''}`}>
            <label>
            Standard Mode
              <input type='radio' value='standard'   name="mode" checked={mode==='standard'} onChange={handleModeChange} /> 
            </label>
            <br/>
            <span>Time decreases normally</span>
          </div>
          <div className={`timesetter__mode-selector--two ${mode==='hourglass' ? 'timesetter__mode-selector--active' : ''}`}>
            <label>
              Hourglass Mode
              <input type='radio' value='hourglass'   name="mode" checked={mode==='hourglass'} onChange={handleModeChange} />
            </label>
            <br/>
            <span>Time is added to the inactive player</span>
          </div>
        </div>
        
        <div className="timesetter__time-input timesetter__time-input--one">
          <label htmlFor="timeOne">White</label>
          <input type='number' name='one' id='timeOne' min="0.5" max="60" step="0.5" defaultValue="4" />
          <span>mins</span>
        </div>
        <div className="timesetter__time-input timesetter__time-input--two">
          <label htmlFor="timeOne">Black</label>
          <input type='number' name='two' id='timeTwo' min="0.5" max="60" step="0.5" defaultValue="4" />
          <span>mins</span>
        </div>
        <button type='submit' className='button'> Yes </button>
      </form>
    </div>
  );
}


export default TimeSet;
