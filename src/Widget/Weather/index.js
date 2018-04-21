import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './Api';
import WeatherIcon from './WeatherIcon';
import Temperature from './Temperature';
import './style.css';

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeather: null,
      currentTemperature: null,
      oneHourRainForecast: {},
    };

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();

    document.addEventListener('visibilitychange', this.refresh);

    setInterval(() => {
      this.refresh();
    }, 600000);
  }

  async refresh() {
    const forecast = await Api.getWeatherForecast(this.props.latitude, this.props.longitude);

    this.setState({
      currentWeather: forecast['current_weather'],
      currentTemperature: forecast['current_temperature'],
    });
  }

  render() {
    return (
      <div className="weather">
        <div className="current">
          <WeatherIcon weather={this.state.currentWeather} />
          <Temperature celsiusDegrees={this.state.currentTemperature} />
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
