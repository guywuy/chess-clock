import React from 'react';

export const RotateButton = ({
  onClick
}) => {

  return (
    <div className='button--aux button--rotate' onClick={ ev => onClick() }>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505 505">
        <path d="M0 252.5a252.4 252.4 0 1 1 504.9-.1 252.4 252.4 0 0 1-504.9.1z" width="60" height="60" fill="#ffa552"/>
        <path d="M195 280.5h15.5c12 0 18.8-13.7 11.6-23.3L161.3 177a14.5 14.5 0 0 0-23.2 0l-60.8 80.2a14.5 14.5 0 0 0 11.6 23.3h14C124.7 381 220.5 423 292.2 400c6.3-2 5.1-11.3-1.6-11.8-66.1-4.8-102.6-62.4-95.6-107.7z" fill="#fff"/>
        <path d="M310 224.5h-15.5c-12 0-18.8 13.7-11.6 23.3l60.8 80.3a14.5 14.5 0 0 0 23.2 0l60.8-80.3c7.3-9.6.4-23.3-11.6-23.3h-14C380.2 124 284.4 82 212.7 105c-6.3 2-5.1 11.3 1.6 11.8 66.2 4.8 102.7 62.4 95.7 107.7z" fill="#fff"/>
      </svg>
      <span>Rotate</span>
    </div>
  );
}

export default RotateButton;
