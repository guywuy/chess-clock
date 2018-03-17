import React from 'react';


export const MuteButton = ({
  muted,
  onClick
}) => {

  function handleClick(ev){
    onClick();
  }

  return (
    <div className='button--mute' onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" fill="orange">
        {muted ? 
          (<path d="M51.7 8.3a1 1 0 0 0-1.4 0l-42 42a1 1 0 1 0 1.4 1.4l42-42c.4-.4.4-1 0-1.4zM52.8 10.6L42 21.4v27.5a3.1 3.1 0 0 1-4.7 2.7l-.2-.2-13-12.1-13.5 13.5a29.8 29.8 0 0 0 40.6-1.6 29.8 29.8 0 0 0 1.6-40.6zM15.1 39a3.1 3.1 0 0 1-3.1-3.1V23.1c0-1.7 1.4-3.1 3.1-3.1h8.3l.5-.1L37.1 7.6l.2-.2a3.1 3.1 0 0 1 4.7 2.7v4.5l7.4-7.4A29.8 29.8 0 0 0 8.8 8.8a29.8 29.8 0 0 0-1.6 40.6L17.6 39H15z"/>) : (<path d="M30 0a30 30 0 1 0 0 60 30 30 0 0 0 0-60zm6 48.9a3.1 3.1 0 0 1-4.7 2.7l-.2-.2L18 39.1l-.5-.1H9.1A3.1 3.1 0 0 1 6 35.9V23.1C6 21.4 7.4 20 9.1 20h8.3l.5-.1L31.1 7.6l.2-.2a3.1 3.1 0 0 1 4.7 2.7V49zm3-9.9a1 1 0 0 1-.7-1.7 11 11 0 0 0 0-15.6 1 1 0 1 1 1.4-1.4c5 5 5 13.3 0 18.4a1 1 0 0 1-.7.3zm4.2 3.7a1 1 0 0 1-1.4 0 1 1 0 0 1 0-1.4 16 16 0 0 0 0-22.6 1 1 0 1 1 1.4-1.4c7 7 7 18.4 0 25.4z"/>)}
        </svg>
    </div>
  );
}


export default MuteButton;
