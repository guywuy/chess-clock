import React from 'react';


export const Confirmation = ({
  onConfirm,
  onCancel
}) => {

  return (
    <div className="overlay confirmation">
      <h1>Cancel the timer?</h1>
      <div className="confirmation-buttons">
        <div className="button" onClick={ ev => onConfirm() }> Yes </div>
        <div className="button" onClick={ ev => onCancel() }> No </div>
      </div>
    </div>
  );
}


export default Confirmation;
