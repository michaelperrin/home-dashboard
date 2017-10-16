import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './Api';

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
        availableBikeStands: stationInfo.available_bike_stands,
        isOpen: stationInfo.status
      });
    });
  }

  render() {
    return (
      <div className="Velib">
        Vélos disponibles: {this.state.availableBikes}
      </div>
    );
  }
}

Velib.propTypes = {
  stationId: PropTypes.number.isRequired,
  contract: PropTypes.string.isRequired
};
