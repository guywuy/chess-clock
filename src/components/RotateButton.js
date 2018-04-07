import React from 'react';

export const RotateButton = ({
  onClick
}) => {

  return (
    <div className='button--aux button--rotate' onClick={ ev => onClick() }>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20" width="60" height="60" >
        <path fill="#ffa552" d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path>
      </svg>
      <span>Rotate</span>
    </div>
  );
}

export default RotateButton;
