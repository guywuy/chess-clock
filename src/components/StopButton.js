import React from 'react';

export const StopButton = ({
  onClick
}) => {

  return (
    <div className='button--stop' onClick={ ev => onClick() }>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60" height="60">
        <circle cx="256" cy="256" r="256" fill="orange"/>
        <g fill="#fff">
          <path d="M151.3 168.3l17-17 192.3 192.4-17 17z"/>
          <path d="M151.3 343.7l192.4-192.3 17 17-192.4 192.3z"/>
        </g>
      </svg>
      Cancel
    </div>
  );
}

export default StopButton;
