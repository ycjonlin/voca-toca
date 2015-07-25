/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react/addons';
import styles from './ConnectPage.less';
import withStyles from '../../decorators/withStyles';
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

@withStyles(styles)
class ConnectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: [],
      category: {
        'comfort & support': ['relationships', 'secrets', 'works', 'parenting', 'health', 'great losses', 'homesick', 'shame', 'bad moods', 'sleepless nights'],
        'life styles': ['cooking', 'fitness', 'interior design', 'DIY', 'fashion', 'makeups', 'traveling', 'hiking', 'sports', 'dancing', 'new hobbies'],
        'art & popular culture': ['novels', 'poets', 'movies', 'anime', 'pop music', 'classical music', 'conserts', 'games', 'comnic', 'comedy'],
        'learning': ['dinosaurs', 'wild lifes', 'history', 'foreign culture', 'literature', 'languages', 'physics', 'mathematics', 'chemistry', 'technology']
      }
    };
    this.state.cursor = Object.keys(this.state.category)[0];
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
      let range = this.state.range;
      range.push(interest);
      this.setState({range: range});
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
        <div className="ConnectPage-range">
          <div className="ConnectPage-container">
            Let&apos;s&nbsp;
            <span className="ConnectPage-range-item">
              <i className="fa fa-play" />
              talk
            </span>
            &nbsp;to people who also get&nbsp;
            {function() {
              if (this.state.range.length == 0) {
                return (
                  <span className="ConnectPage-range-item">
                    <i className="fa fa-spinner fa-pulse" />
                    something
                  </span>
                );
              } else {
                return (
                  <ul className="ConnectPage-range-list">
                  {this.state.range.map(function(data, i) {
                    return (
                      <ReactCSSTransitionGroup transitionName="carousel">
                        <li className="ConnectPage-range-item"
                          onClick={this.onDeselect.bind(this, data)}>
                          <i className="fa fa-times" />
                          {data}
                        </li>
                      </ReactCSSTransitionGroup>
                    );
                  }.bind(this))}
                  </ul>
                );
              }
            }.bind(this)()}
            &nbsp;stuck in their heads.
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
                let iconName = "fa fa-check";
                if (this.state.range.indexOf(data) != -1) {
                  className += " ConnectPage-category-minor-item-active";
                  iconName = "fa fa-circle-o";
                }
                return (
                  <li className={className}
                    onClick={this.onSelect.bind(this, data)}>
                    <i className={iconName} />
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
