import React from 'react';

export const TimeSet = ({
  onSubmit
}) => {

 
  function handleSubmit(ev){
    console.log(ev.target.one.value);
    onSubmit( Math.floor(ev.target.one.value*60), Math.floor(ev.target.two.value*60));
  }

  return (
    <div className='timesetter'>
      <form action='' onSubmit={handleSubmit}>
        <h1>Set Times</h1>
        <div>
          <label htmlFor="timeOne">One</label>
          <input type='number' name='one' id='timeOne' defaultValue='5' />
          <span>mins</span>
        </div>
        <div>
          <label htmlFor="timeOne">Two</label>
          <input type='number' name='two' id='timeTwo' defaultValue='5' />
          <span>mins</span>
        </div>
        <button type='submit' className='button'> Yes </button>
      </form>
    </div>
  );
}


export default TimeSet;
