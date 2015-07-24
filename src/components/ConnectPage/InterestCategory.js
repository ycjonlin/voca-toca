/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './InterestCategory.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class InterestCategory {

  render() {
    return (
      <div className="InterestCategory">
        <div className="InterestCategory-container">
          <div className="InterestCategory-major">
            <i className="fa fa-caret-left fa-2x" />
            <ul>
              <li>Category 1</li>
              <li>Category 1</li>
            </ul>
            <i className="fa fa-caret-right fa-2x" />
          </div>
        </div>
      </div>
    );
  }

}

export default InterestCategory;
