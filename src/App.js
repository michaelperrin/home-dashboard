import React, { Component } from 'react';
import Velib from './Widget/BikeSharing/Velib';
import Time from './Widget/Time';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <Velib stationId={15062} contract="Paris" />
        <Time />
      </div>
    );
  }
}
