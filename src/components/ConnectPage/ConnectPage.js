/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ConnectPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ConnectPage {

  static propTypes = {
    range: React.PropTypes.array.isRequired,
    category: React.PropTypes.object.isRequired
  };

  getDefaultProps() {
    return {
      range: ['gaming', 'sleeping', 'eating'],
      category: {
        eating: ['food', 'bad-food', 'poison', 'vietnamese'],
        gaming: ['game 1', 'game 2', 'game 3'],
        sleeping: ['nap', 'daydraming', 'good night sleep']
      }
    };
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let props = this.getDefaultProps();
    let title = 'Forget what your mother say. Let\'s talk to a stranger on the Internet!';
    this.context.onSetTitle(title);
    console.log(this.props);
    return (
      <div className="ConnectPage">
        <div className="ConnectPage-container">
          <h3>{title}</h3>
          <div className="ConnectPage-category-container">
            <div className="ConnectPage-category-major">
              <i className="fa fa-caret-left fa-2x">&lt;</i>
              <ul className="ConnectPage-category-major-list">
              {Object.keys(props.category).map(function(data, i) {
                return (
                  <li className="ConnectPage-category-major-item">{data}</li>
                );
              })}
              </ul>
              <i className="fa fa-caret-right fa-2x">&gt;</i>
            </div>
            <div className="ConnectPage-category-minor">
              {Object.keys(props.category).map(function(data, i) {
                return (
                  <ul className="ConnectPage-category-minor-list">
                  {props.category[data].map(function(data, i) {
                    return (
                      <li className="ConnectPage-category-minor-item">{data}</li>
                    );
                  })}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ConnectPage;
