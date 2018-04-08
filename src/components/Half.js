import React from 'react';


export const Half = ({
  id,
  active,
  totalTime,
  timeRemaining,
  percentComplete,
  onClick
}) => {
 
  function handleClick(ev){
    if (active) onClick(id);
  }

  function getGradient(){
    const style = {};

    // const yellow = 'rgb(255, 210, 108)';
    const yellow = `rgba(255, 210, 108, ${1 - (percentComplete/100)})`;
    const yellowSecondary = '#ffd151';
    const red = 'rgb(120, 0, 0)';
    const redSecondary = 'rgb(144, 0, 0)';
    // const orange = 'rgb(248, 80, 50)';
    // const pink = 'rgba(255, 0, 255, 0.23)';

    
    // console.log(percentComplete)
    style.background = `linear-gradient(to ${id === 'one' ? 'left' : 'right'}, ${active ? yellowSecondary : red } 0%, ${active ? yellowSecondary : redSecondary } ${percentComplete}%, ${active ? yellow : red } ${percentComplete+0.1}%, ${active ? yellow : red } 100%)`;
    
    return style;
  }

  return (
    <div 
      className={active ? 'half active' : 'half'} 
      id={id} 
      onClick={handleClick} 
      style={getGradient()
    }>
      <div className={ percentComplete >= 90 && active ? "time-display flashing" : "time-display" }>
        <h1>{timeRemaining}</h1>
      </div>
    </div>
  );
}


export default Half;
