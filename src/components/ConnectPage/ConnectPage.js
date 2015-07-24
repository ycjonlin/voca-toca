/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ConnectPage.less';
import withStyles from '../../decorators/withStyles';
import InterestRange from './InterestRange';
import InterestCategory from './InterestCategory';

@withStyles(styles)
class ConnectPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Forget what your mother say. Let\'s talk to a stranger on the Internet!';
    this.context.onSetTitle(title);
    return (
      <div className="ConnectPage">
        <div className="ConnectPage-container">
          <h1>{title}</h1>
          <InterestRange interests={[]} />
          <InterestCategory />
        </div>
      </div>
    );
  }

}

export default ConnectPage;
