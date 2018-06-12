import React from 'react';
import SwipeableTimeInput from './form-elements/SwipeableTimeInput.js';


export const TimeSet = ({
  onSubmit,
  mode,
  back
}) => {

  // Submit times for (white, black)
  function handleSubmit(ev){
    let w = document.querySelector('#timeOne');
    let b = document.querySelector('#timeTwo');
    ev.preventDefault();
    onSubmit( Math.floor(w.value*600), Math.floor(b.value*600));
  }

  const numberInputAttributes = {
    'min' : mode === 'standard' ? 1 : 0.1,
    'max' : mode === 'standard' ? 60 : 30,
    'step' : mode === 'standard' ? 1 : 0.1,
    'default' : mode === 'standard' ? 10 : 0.5,
  }

  return (
    <div className='overlay timesetter'>
      <form action='' onSubmit={handleSubmit}>
        <h1>Set Times</h1>
        
        <div className="timesetter__options-selector">

          <SwipeableTimeInput 
            name='one' 
            id='timeOne' 
            label='White' 
            min={ numberInputAttributes.min } 
            max={ numberInputAttributes.max } 
            step={ numberInputAttributes.step } 
            defaultValue={ numberInputAttributes.default }
          />

          <SwipeableTimeInput 
            name='two' 
            id='timeTwo' 
            label='Black' 
            min={ numberInputAttributes.min } 
            max={ numberInputAttributes.max } 
            step={ numberInputAttributes.step } 
            defaultValue={ numberInputAttributes.default }
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
