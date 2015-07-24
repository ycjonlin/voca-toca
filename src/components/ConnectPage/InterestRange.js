/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './InterestRange.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class InterestRange {

  static propTypes = {
    range: React.PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="InterestRange">
        <div className="InterestRange-container">
          <ul className="InterestRange-list">
            {this.props.range.map(function(item, i) {
              return (
                <li className="InterestRange-item">{item}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

}

export default InterestRange;
