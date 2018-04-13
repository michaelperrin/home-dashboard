import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './logos.css';

export default class Station extends Component {
  render() {
    return (
      <div className="station">
        <div className={`${this.props.type} ligne${this.props.line}`} style={{marginRight: '16px'}}></div>
        <div style={{textAlign: 'left'}}>
          <div>{this.props.name}</div>


          <div className="direction">{this.props.direction}</div>
        </div>
      </div>
    );
  }
}

Station.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  direction: PropTypes.string
};
