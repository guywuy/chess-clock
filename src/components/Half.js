import React from 'react';


export const Half = ({
  id,
  active,
  totalTime,
  timeRemaining,
  onClick
}) => {
 
  function handleClick(ev){
    if (active) onClick(id);
  }

  return (
    <div className={`half ${active ? 'active' : ''}`} id={id} onClick={handleClick}>
      <div className="time-display">
        <h1>{timeRemaining}</h1>
      </div>
    </div>
  );
}


export default Half;
