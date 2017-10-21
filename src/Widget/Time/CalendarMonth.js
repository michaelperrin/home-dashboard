import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarDay from './CalendarDay';
import './Calendar.css';
import moment from 'moment';
import 'moment/locale/fr';

export default class CalendarMonth extends Component {
  getFirstDay(year, month) {
    let date = new Date(year, month, 1);

    return date.getDay();
  }

  getNumberOfDays(year, month) {
    let date = new Date(year, month + 1, 0);

    return date.getDate();
  }

  /**
   * Returns list of days for header. Examples:
   *   - In French:  L M M J V S D
   *   - In English: S M T W T F S
   *
   * @return {Array}
   */
  getDayHeaderLabels() {
    moment.locale('fr');
    let weekDays = moment.weekdaysMin();
    let orderedWeekDays = [];

    for (let dayOfWeek = this.props.firstDayOfWeek; dayOfWeek < this.props.firstDayOfWeek + 7; dayOfWeek++) {
      orderedWeekDays.push({
        'dayOfWeek': dayOfWeek,
        'shortName': weekDays[dayOfWeek % 7].charAt(0)
      });
    }

    return orderedWeekDays;
  }

  /**
   * Returns list of week rows to display.
   *
   * @return {Array}
   */
  getWeekRows() {
    let firstDay = this.getFirstDay(this.props.year, this.props.month);

    let weekRows = [];
    let weekRow = [];

    let nbEmpty = this.convertWeekDay(firstDay, this.props.firstDayOfWeek);
    let firstDayInCalendar = new Date(this.props.year, this.props.month, 1 - nbEmpty);

    let i = 0;
    let currentDate = firstDayInCalendar;

    while (currentDate.getMonth() <= this.props.month || i % 7 !== 0) {
      weekRow.push(new Date(currentDate.getTime()));

      if (weekRow.length === 7) {
        weekRows.push({
          'week': moment(currentDate).format('W'),
          'dates': weekRow
        });

        weekRow = [];
      }

      currentDate.setDate(currentDate.getDate() + 1);
      i++;
    }

    return weekRows;
  }

  /**
   * Converts week day value (e.g. for Sunday, 0 becomes 6 if first day of week is Monday)

   * @param  {number} weekDay
   * @param  {number} firstDayOfWeek
   * @return {number}
   */
  convertWeekDay(weekDay, firstDayOfWeek) {
    return (7 + weekDay - firstDayOfWeek) % 7;
  }

  isCurrentDay(date) {
    let today = new Date();

    return date.getFullYear() === today.getFullYear()
      && date.getDate() === today.getDate()
      && date.getMonth() === today.getMonth();
  }

  render() {
    return (
      <table role="presentation">
        <thead>
          <tr>
            {this.getDayHeaderLabels().map(weekDay => (
              <th key={`header-weekday-${weekDay.dayOfWeek}`}>{weekDay.shortName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.getWeekRows().map(weekRow => (
            <tr key={`week-row-${weekRow.week}`}>
              {weekRow.dates.map(date => (
                <td key={`date-${date.toISOString()}`}>
                  <CalendarDay
                    day={date}
                    currentDay={this.isCurrentDay(date)}
                    currentMonth={date.getMonth() === this.props.month}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

CalendarMonth.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
};

CalendarMonth.defaultProps = {
  year: (new Date()).getFullYear(),
  month: (new Date()).getMonth(),
  firstDayOfWeek: 1
}
