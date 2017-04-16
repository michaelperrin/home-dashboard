import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';

export default class DateTest extends Component {
  render() {

    let momentDate = moment({
      year: this.props.year,
      month: this.props.month,
      date: this.props.date
    });

    return (
      <div>
        {momentDate.format('LL')}
      </div>
    );
  }
}

DateTest.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired
};
