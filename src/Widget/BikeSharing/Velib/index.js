import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './Api';
import Gauge from '../../../Chart/Gauge';

export default class Velib extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableBikes: 0,
      availableBikeStands: 0,
      isOpen: true
    };

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    Api.getStationInfo(
      this.props.contract,
      this.props.stationId
    ).then((stationInfo) => {
      this.setState({
        availableBikes: stationInfo.available_bikes,
        availableBikeStands: stationInfo.available_stands,
        isOpen: stationInfo.status
      });
    });
  }

  render() {
    return (
      <div className="Velib">
        <Gauge value={this.state.availableBikes} min={0} max={this.state.availableBikeStands} title="" label="connections" />
      </div>
    );
  }
}

Velib.propTypes = {
  stationId: PropTypes.number.isRequired,
  contract: PropTypes.string.isRequired
};
