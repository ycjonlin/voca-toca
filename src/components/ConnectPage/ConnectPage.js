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
          <p>{title}</p>
          <InterestRange interests={['Gaming', 'Sleeping', 'Eating']} />
          <InterestCategory />
        </div>
      </div>
    );
  }

}

export default ConnectPage;
