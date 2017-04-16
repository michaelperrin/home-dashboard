import React, { Component } from 'react';
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
  year: React.PropTypes.number.isRequired,
  month: React.PropTypes.number.isRequired,
  date: React.PropTypes.number.isRequired
};
