import React from 'react';

export const TimeSet = ({
  onSubmit
}) => {

 
  function handleSubmit(ev){
    onSubmit( Math.floor(ev.target.one.value*60), Math.floor(ev.target.two.value*60));
  }

  return (
    <div className='timesetter'>
      <form action='' onSubmit={handleSubmit}>
        <h1>Set Times</h1>
        <div>
          <label htmlFor="timeOne">White</label>
          <input type='number' name='one' id='timeOne' min="1" defaultValue='5' />
          <span>mins</span>
        </div>
        <div>
          <label htmlFor="timeOne">Black</label>
          <input type='number' name='two' id='timeTwo' min="1" defaultValue='5' />
          <span>mins</span>
        </div>
        <button type='submit' className='button'> Yes </button>
      </form>
    </div>
  );
}


export default TimeSet;
