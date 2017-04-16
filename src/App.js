import React, { Component } from 'react';
import Velib from './Widget/BikeSharing/Velib';
import Time from './Widget/Time';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <Velib apiKey="9f3bf9eb909b9addfa73553f658ffd97f9ca79eb" stationId={15062} contract="Paris" />
        <Time />
      </div>
    );
  }
}
