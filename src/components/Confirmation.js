import React from 'react';


export const Confirmation = ({
  onClick,
  onCancel
}) => {

  function handleYes(){
    onClick();
  }
  function handleNo(){
    onCancel();
  }

  return (
    <div className="confirmation">
      <h1>Cancel the timer?</h1>
      <div className="button" onClick={handleYes}> Yes </div>
      <div className="button" onClick={handleNo}> No </div>
    </div>
  );
}


export default Confirmation;
