import React, { Component } from 'react';

export default class Clock extends Component {
  render() {
    let minutes = this.props.minutes < 10 ? '0' + this.props.minutes : this.props.minutes;
    let seconds = this.props.seconds < 10 ? '0' + this.props.seconds : this.props.seconds;

    return (
      <div>
        {this.props.hours}:{minutes}:{seconds}
      </div>
    );
  }
}

Clock.propTypes = {
  hours: React.PropTypes.number.isRequired,
  minutes: React.PropTypes.number.isRequired,
  seconds: React.PropTypes.number.isRequired
};
