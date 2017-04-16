import 'whatwg-fetch';

export default class Api {
  static getStationInfo(apiKey, contract, stationId) {
    return fetch(`https://api.jcdecaux.com/vls/v1/stations/${stationId}?contract=${contract}&apiKey=${apiKey}`)
      .then(function(response) {
        return response.json();
      })
    ;
  }
}
