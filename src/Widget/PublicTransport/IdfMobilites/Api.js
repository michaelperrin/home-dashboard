import 'whatwg-fetch';

export default class Api {
  static getNextDepartures(lineId, stopId, direction) {
    let params = {
      line_id: lineId,
      stop_id: stopId,
      direction: direction
    };

    let queryParams = Object
      .keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&')
    ;

    return fetch(`${process.env.REACT_APP_API_HOST}/public-transport/idf-mobilites/next-departures?${queryParams}`)
      .then(function(response) {
        return response.json();
      })
    ;
  }
}
