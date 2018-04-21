import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WeatherIcon extends Component {
  getPictureFromWeather(weather) {
    // For now, weather and icon match
    return `images/weather/${weather}.svg`;
  }

  render() {
    const icon = this.getPictureFromWeather(this.props.weather);

    return (
      <div className="icon" style={{'backgroundImage': `url('${icon}')` }} />
    );
  }
}

WeatherIcon.propTypes = {
  weather: PropTypes.string.isRequired
};
