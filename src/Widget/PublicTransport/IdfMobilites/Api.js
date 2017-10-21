import 'whatwg-fetch';

export default class Api {
  static getNextDeparturesForDirection(lineId, stopId, direction) {
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

    return fetch(`${process.env.REACT_APP_API_HOST}/public-transport/idf-mobilites/direction/next-departures?${queryParams}`)
      .then(function(response) {
        return response.json();
      })
    ;
  }

  static getNextDeparturesForStation(lineId, stopId) {
    let params = {
      line_id: lineId,
      stop_id: stopId
    };

    // TODO : merge code
    let queryParams = Object
      .keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&')
    ;

    return fetch(`${process.env.REACT_APP_API_HOST}/public-transport/idf-mobilites/station/next-departures?${queryParams}`)
      .then(function(response) {
        return response.json();
      })
    ;
  }
}
