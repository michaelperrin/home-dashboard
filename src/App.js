import React, { Component } from 'react';
import Velib from './Widget/BikeSharing/Velib';
import Time from './Widget/Time';
import CalendarMonth from './Widget/Time/CalendarMonth';
import IdfMobilites from './Widget/PublicTransport/IdfMobilites';
import StationDepartures from './Widget/PublicTransport/IdfMobilites/StationDepartures';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-4">
            <Time />
          </div>
          <div className="col-4">
            <CalendarMonth />
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <Velib stationId={15062} contract="Paris" />
          </div>

          <div className="col-4">
            <IdfMobilites lineId="100110008:8" stopId="stopPoint:59476" direction={1} />

            <StationDepartures
              name="Boucicaut"
              line={62}
              type="bus"
              lineId="100100062:62"
              stopId="stopPoint:59:3893526"
            />

            <StationDepartures
              name="Convention – Boucicaut"
              line={42}
              type="bus"
              lineId="100100042:42"
              stopId="stopPoint:59:3811268"
            />
          </div>
        </div>
      </div>
    );
  }
}
