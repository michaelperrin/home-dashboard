import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './Api';
import DepartureTimes from './DepartureTimes';
import StationIcon from './StationIcon';

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

    document.addEventListener('visibilitychange', this.refresh);

    setInterval(() => {
      this.refresh();
    }, 30000);
  }

  refresh() {
    Api.getNextDeparturesForStation(
      this.props.lineId,
      this.props.stopId
    ).then((nextDeparturesData) => {
      this.setState({
        nextDepartures: nextDeparturesData.next_departures
      });
    }).catch((error) => {
      console.log('error');
    });
  }

  render() {
    return (
      <div className="idf-mobilites">
        <table style={{'width': '100%'}}>
          <thead>
            <tr>
              <td style={{'width': '60px'}}>
                <StationIcon line={this.props.line} type={this.props.type} />
              </td>
              <td className="station">
                {this.props.name}
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.nextDepartures.map((directionDepartures) => {
              let times = directionDepartures.times.slice(0, this.props.maxItems);

              return (
                <tr key={directionDepartures.direction}>
                  <td />
                  <td className="direction">{directionDepartures.direction}</td>
                  <td style={{'textAlign': 'right'}}>
                    <DepartureTimes times={times} />
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
  line: PropTypes.string.isRequired,
  maxItems: PropTypes.number
};

StationDepartures.defaultValues = {
  maxItems: 4
}
