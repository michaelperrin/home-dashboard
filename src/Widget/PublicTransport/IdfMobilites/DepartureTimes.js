import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class DepartureTimes extends PureComponent {
  /**
   * Filter times depending on display parameters
   */
  getTimes() {
    let times = this.props.times;

    if (undefined !== this.props.minTime) {
      times = times.filter((time) => time >= this.props.minTime);
    }

    if (undefined !== this.props.maxTime) {
      times = times.filter((time) => time <= this.props.maxTime);
    }

    if (undefined !== this.props.maxItems) {
      times = times.slice(0, this.props.maxItems);
    }

    return times;
  }

  render() {
    let times = this.getTimes();

    return (
      <ul className="departures">
        {times.length > 0 &&
          times.map((time) => {
            return (
              <li key={time.toString()}>
                {time}
                <abbr>min</abbr>
              </li>
            );
          })
        }

        {times.length === 0 &&
          <li>–</li>
        }
      </ul>
    );
  }
}

DepartureTimes.propTypes = {
  times: PropTypes.arrayOf(PropTypes.number),
  maxItems: PropTypes.number,
  minTime: PropTypes.number,
  maxTime: PropTypes.number
};
