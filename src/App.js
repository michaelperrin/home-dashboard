import React, { Component } from 'react';
import Velib from './Widget/BikeSharing/Velib';
import Time from './Widget/Time';
import IdfMobilites from './Widget/PublicTransport/IdfMobilites';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <Velib stationId={15062} contract="Paris" />
        <Time />
        <IdfMobilites lineId="100110008:8" stopId="stopPoint:59476" direction={1} />
      </div>
    );
  }
}
