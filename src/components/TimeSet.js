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
          <label>
            Standard
            <input type='radio' value='standard'   name="mode" checked={mode==='standard'} onChange={handleModeChange} /> 
            <br/>
            <span>Time decreases normally</span>
          </label>
          <label>
            Hourglass
            <input type='radio' value='hourglass'   name="mode" checked={mode==='hourglass'} onChange={handleModeChange} />
            <br/>
            <span>Time is added to the inactive player</span>
          </label>
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
