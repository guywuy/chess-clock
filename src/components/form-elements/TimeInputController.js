import React, { Component } from "react";
import SwipeableTimeInput from "./SwipeableTimeInput.js";

class TimeInputController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueMinutes: this.props.defaultValueMinutes,
      valueSeconds: this.props.defaultValueSeconds
    };

    this.onChange = this.onChange.bind(this);
  }

  formatTime(millis) {
    let time = Math.round(millis / 10);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes}m:${seconds < 10 ? "0" + seconds + "s" : seconds + "s"}`;
  }

  onChange(whichInput, value) {
    const timeToSet =
      whichInput === "minutes" ? "valueMinutes" : "valueSeconds";
    this.setState({ [timeToSet]: value });
  }

  render() {
    return (
      <div
        className={`timesetter__time-input timesetter__time-input--${
          this.props.name
        }`}
      >
        <strong>{this.props.name.toUpperCase()}</strong>
        <SwipeableTimeInput
          name={this.props.name}
          id={this.props.idBase + "--minutes"}
          timeUnit="minutes"
          value={this.state.valueMinutes}
          handleChange={this.onChange}
        />

        <SwipeableTimeInput
          name={this.props.name}
          id={this.props.idBase + "--seconds"}
          timeUnit="seconds"
          value={this.state.valueSeconds}
          handleChange={this.onChange}
        />
      </div>
    );
  }
}

export default TimeInputController;
