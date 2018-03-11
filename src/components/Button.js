import React from 'react';


export const Button = ({
  started,
  paused,
  onClick
}) => {

  const getCommand = () => {
    if (started) {
      if (paused) {
        return 'resume'
      } else {
        return 'pause'
      }
    } else {
      return 'start'
    }
  }
 
  function handleClick(ev){
    onClick(getCommand());
  }

  return (
    <div className='button button--center' onClick={handleClick}>
      {getCommand().toUpperCase()}
    </div>
  );
}


export default Button;
