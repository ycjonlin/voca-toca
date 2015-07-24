/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './InterestCategory.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class InterestCategory {

  static propTypes = {
    category: React.PropTypes.object.isRequired
  };

  render() {
    var self = this;
    return (
    );
  }

}

export default InterestCategory;
