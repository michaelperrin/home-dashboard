import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './Api';

export default class IdfMobilites extends Component {
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
    Api.getNextDepartures(
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
        Prochains départs:

        <ul>
          {this.state.nextDepartures.map((time) => {
            return (
              <li>{time}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

IdfMobilites.propTypes = {
  lineId: PropTypes.string.isRequired,
  stopId: PropTypes.string.isRequired,
  direction: PropTypes.number.isRequired
};
