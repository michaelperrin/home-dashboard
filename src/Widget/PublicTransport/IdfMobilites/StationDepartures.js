import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './Api';
import DepartureTimes from './DepartureTimes';
import Station from './Station';

export default class StationDepartures extends Component {
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
    Api.getNextDeparturesForStation(
      this.props.lineId,
      this.props.stopId
    ).then((nextDeparturesData) => {
      this.setState({
        nextDepartures: nextDeparturesData.next_departures
      });
    });
  }

  render() {
    return (
      <div className="idf-mobilites">
        <table>
          <thead>
            <tr>
              <td><Station name={this.props.name} type={this.props.type} line={this.props.line} /></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.nextDepartures.map((directionDepartures) => {
              return (
                <tr>
                  <td className="direction">{directionDepartures.direction}</td>
                  <td>
                    <DepartureTimes times={directionDepartures.times} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

StationDepartures.propTypes = {
  lineId: PropTypes.string.isRequired,
  stopId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  line: PropTypes.string.isRequired
};
