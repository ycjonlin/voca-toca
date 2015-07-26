/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  render() {
    return !this.props.error ? (
      <div>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/hover.css/2.0.2/css/hover-min.css" />
        <Header />
        {this.props.children}
        {/*}<Feedback />*/}
        {/*<Footer />*/}
      </div>
    ) : this.props.children;
  }

}

export default App;
