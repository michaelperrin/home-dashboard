import React, { Component } from 'react';
import 'whatwg-fetch';

export default class NextDepartures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departures: []
    };
  }

  componentDidMount() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');


    fetch(
      `https://api-lab-trone-stif.opendata.stif.info/service/tr-vianavigo/departures?line_id=100110008%3A8&stop_point_id=stopPoint%3A59476&apikey=${this.props.apiKey}`,
      {
        // mode: 'no-cors',
        // headers: {
        //   'Access-Control-Allow-Origin': '*'
        // }
      }
    )
      // .then((response) => { console.log(response, response.json());})
      .then((response) => { console.log(response); return response.json(); })
      .then((response) => {
        console.log('aaa', response);
        this.setState({departures: response});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let departures = this.state.departures.map((departure) => (
      <div>{departure.lineDirection}</div>
    ));

    // console.log(departures);
    // let departures = (
    //   <div>you</div>
    // );

    return (
      <div>
        Hehe
        {departures}
      </div>
    );
  }
}
