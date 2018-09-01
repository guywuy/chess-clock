import React from "react";
import Swipeable from "react-swipeable";

export const SwipeableTimeInput = ({
  timeUnit,
  name,
  handleChange,
  value,
  id
}) => {
  function swiping(e, deltaX, deltaY, absX, absY, velocity) {
    let change = deltaY * velocity;

    // If positive change, and value is still less than max, add change to value, vice versa for negative change
    if ((change > 0 && value < 60) || (change < 0 && value > 0)) {
      let newValue = Math.round(value + change / 10);

      if (newValue > 60) newValue = 60;
      if (newValue < 0) newValue = 0;

      handleChange(timeUnit, newValue);
    }
  }

  function onChange(e) {
    handleChange(timeUnit, e.target.value);
  }

  function increment() {
    if (value<60) handleChange(timeUnit, value + 1);
  }

  function decrement() {
    if (value>0) handleChange(timeUnit, value - 1);
  }

  return (
    <div
      className={`timesetter__time-input timesetter__time-input--${name}--${timeUnit}`}
    >
      <Swipeable onSwiping={swiping}>
        <span className={value < 60 ? 'timesetter__time-increment' : 'timesetter__time-increment timesetter__time-increment--disabled' } onClick={increment}></span>
        <input
          type="number"
          name={name}
          id={id}
          min="0"
          max="60"
          step="1"
          value={value}
          onChange={onChange}
        />
        <span className={value > 0 ? 'timesetter__time-decrement' : 'timesetter__time-decrement timesetter__time-decrement--disabled' } onClick={decrement}></span>
        <label htmlFor={id}>{timeUnit.substring(0, 1)}</label>
      </Swipeable>
    </div>
  );
};

export default SwipeableTimeInput;
