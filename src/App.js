import React, { Component } from 'react';
import Velib from './Widget/BikeSharing/Velib';
import Time from './Widget/Time';
import NextDepartures from './Widget/Transport/STIF/NextDepartures';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <Velib apiKey="9f3bf9eb909b9addfa73553f658ffd97f9ca79eb" stationId={15062} contract="Paris" />
        <Time />
        <NextDepartures apiKey="b852abd2898ae37d3fc65f580f62120a014f3e82e64a5a7d45006860" type="metro" line={8} />
      </div>
    );
  }
}
