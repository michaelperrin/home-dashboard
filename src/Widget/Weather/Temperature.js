import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Temperature extends Component {
  getDisplayedTemperature() {
    let temperature = this.props.celsiusDegrees;
    temperature = this.convertToHalfDegrees(temperature);

    return `${temperature}°`;
  }

  convertToHalfDegrees(temperature) {
    return Math.round(temperature * 2) / 2;
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
