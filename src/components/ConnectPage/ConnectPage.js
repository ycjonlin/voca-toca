/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ConnectPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ConnectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: ['food', 'vietnamese'],
      cursor: 'eating',
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

  onScroll(offset) {
    var categories = Object.keys(this.state.category);
    var length = categories.length;
    var index = categories.indexOf(this.state.cursor);
    var cursor = categories[(index+offset+length)%length];
    this.setState({
      cursor: cursor
    });
  }

  onSelect(interest) {
    let index = this.state.range.indexOf(interest);
    if (index == -1) {
      let array = this.state.range.slice();
      array.push(interest);
      this.setState({
        range: array
      });
    }
  }

  onDeselect(interest) {
    let index = this.state.range.indexOf(interest);
    if (index != -1) {
      let array = this.state.range.slice();
      array.splice(index, 1);
      this.setState({
        range: array
      });
    }
  }

  render() {
    //let title = 'Forget what your mother say. Let\'s talk to a stranger on the Internet!';
    //this.context.onSetTitle(title);
    return (
      <div className="ConnectPage">
        <div className="ConnectPage-container">
          <div className="ConnectPage-range">
            <h3 className="text-center">Connect through your interests</h3>
            <ul className="ConnectPage-range-list">
            {this.state.range.map(function(data, i) {
              return (
                <li className="ConnectPage-range-item"
                  onClick={this.onDeselect.bind(this, data)}>
                  <i className="fa fa-times" />
                  {data}
                </li>
              );
            }.bind(this))}
            </ul>
          </div>
        </div>
        <div className="ConnectPage-container">
          <div className="ConnectPage-category-major">
            <i className="fa fa-caret-left"
              onClick={this.onScroll.bind(this, -1)} />
            <ul className="ConnectPage-category-major-list">
              <li className="ConnectPage-category-major-item">
                {this.state.cursor}
              </li>
            </ul>
            <i className="fa fa-caret-right"
              onClick={this.onScroll.bind(this, 1)} />
          </div>
          <div className="ConnectPage-category-minor">
            <ul className="ConnectPage-category-minor-list">
              {this.state.category[this.state.cursor].map(function(data, i) {
                let className = "ConnectPage-category-minor-item";
                if (this.state.range.indexOf(data) != -1)
                  className += " ConnectPage-category-minor-item-active";
                return (
                  <li className={className}
                    onClick={this.onSelect.bind(this, data)}>
                    <i className="fa fa-check" />
                    {data}
                  </li>
                );
              }.bind(this))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default ConnectPage;
