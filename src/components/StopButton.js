import React from 'react';


export const StopButton = ({
  onClick
}) => {
 
  function handleClick(ev){
    onClick();
  }

  return (
    <div className='button--stop' onClick={handleClick}>
      Stop game
    </div>
  );
}


export default StopButton;
