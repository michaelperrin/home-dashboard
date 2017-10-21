import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './Api';
import DepartureTimes from './DepartureTimes';
import Station from './Station';

export default class DirectionDepartures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextDepartures: []
    };

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    Api.getNextDeparturesForDirection(
      this.props.lineId,
      this.props.stopId,
      this.props.direction
    ).then((nextDeparturesData) => {
      this.setState({
        nextDepartures: nextDeparturesData.next_departures
      });
    });
  }

  render() {
    return (
      <div className="idf-mobilites">
        <div className="row align-items-center">
          <div className="col">
            <Station name="Boucicaut" direction="Pointe du lac" type="metro" line="8" />
          </div>

          <div className="col">
            <DepartureTimes times={this.state.nextDepartures} />
          </div>
        </div>
      </div>
    );
  }
}

DirectionDepartures.propTypes = {
  lineId: PropTypes.string.isRequired,
  stopId: PropTypes.string.isRequired,
  direction: PropTypes.number.isRequired
};
