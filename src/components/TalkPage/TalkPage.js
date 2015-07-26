/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './TalkPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class TalkPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  componentDidMount() {
    console.log(this.props.interests);
  }

  render() {
    return (
      <div className="TalkPage">
        <div className="TalkPage-container">
        </div>
      </div>
    );
  }

}

export default TalkPage;
