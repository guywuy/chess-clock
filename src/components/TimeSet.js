import React from 'react';

export const TimeSet = ({
  onSubmit,
  mode,
  back
}) => {

  // Submit times for (white, black)
  function handleSubmit(ev){
    ev.preventDefault();
    onSubmit( Math.floor(ev.target.one.value*600), Math.floor(ev.target.two.value*600));
  }

  const numberInputAttributes = {
    'min' : mode === 'standard' ? 1 : 0.2,
    'max' : mode === 'standard' ? 60 : 30,
    'step' : mode === 'standard' ? 1 : 0.1,
    'default' : mode === 'standard' ? 10 : 1,
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
              min={ numberInputAttributes.min } 
              max={ numberInputAttributes.max } 
              step={ numberInputAttributes.step } 
              defaultValue={ numberInputAttributes.default } 
            />
            <span>mins</span>
          </div>
          <div className="timesetter__time-input timesetter__time-input--two">
            <label htmlFor="timeOne">Black</label>
            <input 
              type='number' 
              name='two' 
              id='timeTwo' 
              min={ numberInputAttributes.min } 
              max={ numberInputAttributes.max } 
              step={ numberInputAttributes.step } 
              defaultValue={ numberInputAttributes.default } 
            />
            <span>mins</span>
          </div>
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
