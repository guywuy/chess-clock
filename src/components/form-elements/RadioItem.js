import React from 'react';

export const RadioItem = ({
  className,
  value,
  name,
  handleChange,
  label,
  description,
  checked
}) => {
  
  function handleModeChange(ev){
    handleChange(ev.target.value);
  }

  return (
    <div className={className}>
      <label>
      {label}
        <input type='radio' value={value}  name={name} checked={checked} onChange={handleModeChange} /> 
      </label>
      <br/>
      <span>{description}</span>
    </div>
  );
}


export default RadioItem;
