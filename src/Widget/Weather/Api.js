import 'whatwg-fetch';
import { toQueryString } from '../../helpers/urlUtils.js';

export default class Api {
  static getWeatherForecast(latitude, longitude) {
    const queryParams = toQueryString({
      'latitude': latitude,
      'longitude': longitude,
    });

    return fetch(`${process.env.REACT_APP_API_HOST}/weather/forecast?${queryParams}`)
      .then(function(response) {
        return response.json();
      })
    ;
  }

  static getOneHourRainForecast(zipCode) {
    return new Promise((resolve, reject) => {
        return {'level': 2};
    });
    // return fetch(`${process.env.REACT_APP_API_HOST}/weather/forecast/rain/one-hour?zipCode=${zipCode}`)
    //   .then(function(response) {
    //     return response.json();
    //   })
    // ;
  }
}
