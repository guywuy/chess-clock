import React from 'react';
import MuteButton from './MuteButton';
import RotateButton from './RotateButton';


export const SettingsScreen = ({
  onFinished,
  muted,
  onMuteClick,
  onRotateClick,
}) => {



  return (
    <div className='overlay overlay--alpha settings'>

      <div>

        <MuteButton 
          muted = {muted}
          onClick = {onMuteClick} 
        />
        
        <RotateButton 
          onClick = {onRotateClick} 
        />

      </div>

    
      <div className='button' onClick={ onFinished }>
        BACK
      </div>
      
    </div>
  );
}


export default SettingsScreen;
