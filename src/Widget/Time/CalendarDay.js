import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CalendarDay extends Component {
  render() {
    let dayClass = 'day';

    if (this.props.currentDay) {
        dayClass += ' current-day';
    }

    if (this.props.currentMonth) {
        dayClass += ' current-month';
    }

    return (
      <span className={dayClass}>
        {this.props.day.getDate()}
      </span>
    );
  }
}

CalendarDay.propTypes = {
  day: PropTypes.instanceOf(Date),
  currentDay: PropTypes.bool,
  currentMonth: PropTypes.bool
};
