import React, { Component } from 'react';
// import Velib from './Widget/BikeSharing/Velib';
import Time from './Widget/Time';
import CalendarMonth from './Widget/Time/CalendarMonth';
import IdfMobilites from './Widget/PublicTransport/IdfMobilites';
import StationDepartures from './Widget/PublicTransport/IdfMobilites/StationDepartures';
import Weather from './Widget/Weather';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-4">
            <div style={{marginBottom: '30px'}}>
              <Weather latitude={48.880786} longitude={2.237195} />
            </div>

            <CalendarMonth />
            <Time />
          </div>
          <div className="col-8">
            {/* <IdfMobilites lineId="100110008:8" stopId="stopPoint:59476" direction={1} /> */}

            <div>
              <StationDepartures
                name="Bas Rogers"
                line="144"
                type="bus"
                lineId="100100144:144"
                stopId="stopPoint:59:4024342"
                maxTime={60}
              />

              <StationDepartures
                name="Bas Rogers"
                line="93"
                type="bus"
                lineId="100100093:93"
                stopId="stopPoint:59:4024342"
                maxTime={60}
              />

              <StationDepartures
                name="Puteaux"
                line="2"
                type="tram"
                lineId="100112012:T2"
                stopId="stopPoint:59029"
                maxItems={3}
                minTime={4}
                maxTime={60}
              />

              <StationDepartures
                name="Puteaux"
                line="L"
                type="transilien"
                lineId="800:L"
                stopId="stopPoint:8738238:800:L"
                maxItems={3}
                minTime={4}
                maxTime={60}
              />

              <StationDepartures
                name="Puteaux"
                line="U"
                type="transilien"
                lineId="800:U"
                stopId="stopPoint:8738238:800:U"
                maxItems={3}
                minTime={4}
                maxTime={60}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
