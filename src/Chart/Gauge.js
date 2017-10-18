import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Gauge extends Component {
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    this.createGauge();
  }

  createGauge() {
    var SvgGauge = require("svg-gauge");

    this.gauge = SvgGauge(document.getElementById('gauge'), {
      min: this.props.min,
      max: this.props.max,
      label: function(value) {
        return Math.round(value);
      },
      value: this.props.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.max !== this.props.max) {
      this.gauge.setMaxValue(nextProps.max);
    }

    if (nextProps.value !== this.props.value) {
      this.gauge.setValue(nextProps.value);
    }
  }

  componentWillUnmount() {
    React.unmountComponentAtNode(this.node);
  }

  render() {
    return (
      <div id="gauge" />
    );
  }
}
