import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DepartureTimes extends Component {
  render() {
    return (
      <ul className="departures">
        {this.props.times.map((time) => {
          return (
            <li>
              {time}
              <abbr>min</abbr>
            </li>
          );
        })}
      </ul>
    );
  }
}

DepartureTimes.propTypes = {
  times: PropTypes.arrayOf(PropTypes.number)
};
