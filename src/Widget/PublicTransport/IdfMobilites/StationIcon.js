import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './logos.css';

export default class StationIcon extends Component {
  render() {
    return (
        <div className={`${this.props.type} ligne${this.props.line}`} style={{marginRight: '16px'}}></div>
    );
  }
}

StationIcon.propTypes = {
  line: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
