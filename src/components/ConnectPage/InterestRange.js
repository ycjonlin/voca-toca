/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './InterestRange.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class InterestRange {

  static propTypes = {
    interests: React.PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="InterestRange">
        <div className="InterestRange-container">
          <ul>
            {JSON.stringify(this.props}
            {/*this.props.interests.map(function(interest, i) {
              return (
                <li>{interest}</li>
              );
            })*/}
          </ul>
        </div>
      </div>
    );
  }

}

export default InterestRange;
