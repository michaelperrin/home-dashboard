import 'whatwg-fetch';

export default class Api {
  static getStationInfo(apiKey, contract, stationId) {
    return fetch(`${process.env.REACT_APP_API_HOST}/bike-sharing/velib/station-info?contract=${contract}&id=${stationId}`)
      .then(function(response) {
        return response.json();
      })
    ;
  }
}
