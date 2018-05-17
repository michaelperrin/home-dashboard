import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Temperature extends Component {
  getDisplayedTemperature() {
    return `${this.props.celsiusDegrees}°`;
  }

  render() {
    return (
      <div className="temperature">
        {this.getDisplayedTemperature(this.props.celsiusDegrees)}
      </div>
    );
  }
}

Temperature.propTypes = {
  celsiusDegrees: PropTypes.number.isRequired,
  showAsCelsius: PropTypes.bool
};

Temperature.defaultProps = {
  showAsCelsius: true
};
