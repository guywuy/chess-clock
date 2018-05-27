import React from 'react';

export const TimeSet = ({
  onSubmit,
  mode,
  back
}) => {

  // Submit times for (white, black)
  function handleSubmit(ev){
    onSubmit( Math.floor(ev.target.one.value*600), Math.floor(ev.target.two.value*600));
  }

  function getAttrsBasedOnMode(){
    const attributes = {
      'min' : mode === 'standard' ? 1 : 0.2,
      'max' : mode === 'standard' ? 60 : 30,
      'step' : mode === 'standard' ? 1 : 0.1,
      'default' : mode === 'standard' ? 10 : 1,
    }
    return attributes;
  }

  return (
    <div className='overlay timesetter'>
      <form action='' onSubmit={handleSubmit}>
        <h1>Set Times</h1>
        
        <div className="timesetter__options-selector">
          <div className="timesetter__time-input timesetter__time-input--one">
            <label htmlFor="timeOne">White</label>
            <input 
              type='number' 
              name='one' 
              id='timeOne' 
              min={ getAttrsBasedOnMode().min } 
              max={ getAttrsBasedOnMode().max } 
              step={ getAttrsBasedOnMode().step } 
              defaultValue={ getAttrsBasedOnMode().default } 
            />
            <span>mins</span>
          </div>
          <div className="timesetter__time-input timesetter__time-input--two">
            <label htmlFor="timeOne">Black</label>
            <input 
              type='number' 
              name='two' 
              id='timeTwo' 
              min={ getAttrsBasedOnMode().min } 
              max={ getAttrsBasedOnMode().max } 
              step={ getAttrsBasedOnMode().step } 
              defaultValue={ getAttrsBasedOnMode().default } 
            />
            <span>mins</span>
          </div>
        </div>
        <div class="timesetter__button-container">
          <button type='submit' className='button'> Go! </button>
          <button className='button button--secondary' onClick={back}> Back </button>
        </div>
      </form>
    </div>
  );
}


export default TimeSet;
