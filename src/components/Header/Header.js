/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./logo-small.png')} width="38" height="38" alt="React" />
            <span className="Header-brandTxt">Voca Toca</span>
          </a>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
            <h1 className="Header-bannerTitle">Vodka Talks-A-Lot!</h1>
            <p className="Header-bannerDesc">Tipsy tips for people who looking for a stranger to spend their miserable life with.</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
