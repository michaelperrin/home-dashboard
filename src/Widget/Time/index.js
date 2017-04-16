import React, { Component } from 'react';
import Clock from './Clock';
import { default as DateComponent } from './Date';

export default class Time extends Component {
  constructor(props) {
    super(props);

    this.state = this.getTime();
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(this.getTime());
    }, 1000);
  }

  getTime() {
    let now = new Date();

    return {
      year: now.getFullYear(),
      month: now.getMonth(),
      date: now.getDate(),
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds()
    };
  }

  render() {
    return (
      <div className="dateTime">
        <div className="date">
          <DateComponent year={this.state.year} month={this.state.month} date={this.state.date} />
        </div>

        <div className="time">
          <Clock hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
        </div>
      </div>
    );
  }
}
