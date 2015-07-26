/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react/addons';
import styles from './ConnectPage.less';
import withStyles from '../../decorators/withStyles';
import Location from '../../core/Location';

@withStyles(styles)
class ConnectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: [],
      category: {
        'comfort & support': ['relationships', 'secrets', 'works', 'parenting', 'health', 'great losses', 'homesick', 'shame', 'bad moods', 'sleepless nights'],
        'life styles': ['cooking', 'fitness', 'interior design', 'DIY', 'fashion', 'cosmetics', 'traveling', 'hiking', 'sports', 'dancing', 'new hobbies'],
        'art & popular culture': ['novels', 'poets', 'movies', 'anime', 'pop music', 'classical music', 'conserts', 'games', 'comnic', 'comedy'],
        'learning': ['dinosaurs', 'wild lifes', 'history', 'foreign culture', 'literature', 'languages', 'physics', 'mathematics', 'chemistry', 'technology']
      }
    };
    this.state.cursor = Object.keys(this.state.category)[0];
    var vocabulary = [];
    for (var key in this.state.category) {
      var value = this.state.category[key];
      vocabulary = vocabulary.concat(value);
    }
    this.state.vocabulary = vocabulary;
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

  onSubmit() {
    if (this.state.range.length == 0) return;
    var vocabulary = this.state.vocabulary;
    var interests = this.state.range.map(function(value){
      return vocabulary.indexOf(value);
    });
    Location.navigateTo('/talk/'+interests.join('-'));
  }

  render() {
    //let title = 'Forget what your mother say. Let\'s talk to a stranger on the Internet!';
    //this.context.onSetTitle(title);
    var background = 'url("https://farm1.staticflickr.com/435/19434459102_bd499a9ed9_k_d.jpg")';
    if (this.state.cursor == 'comfort & support')
      background = 'url("https://farm1.staticflickr.com/435/19434459102_bd499a9ed9_k_d.jpg")';
    if (this.state.cursor == 'life styles')
      background = 'url("https://farm5.staticflickr.com/4148/4841385676_9f28409f18_b.jpg")';
    if (this.state.cursor == 'art & popular culture')
      background = 'url("https://farm4.staticflickr.com/3828/9390132687_7bb421e0db_b.jpg")';
    if (this.state.cursor == 'learning')
      background = 'url("https://farm2.staticflickr.com/1034/1423816665_5caa5d1a8e_b.jpg")';
    var style = {backgroundImage: background};
    return (
      <div className="ConnectPage">
        <div className="ConnectPage-bg" style={style}>&nbsp;</div>
        <div className="ConnectPage-range">
          <div className="ConnectPage-container">
            Let&apos;s&nbsp;
            <span className="ConnectPage-range-item hvr-wobble-horizontal"
              onClick={this.onSubmit.bind(this)}>
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
                      <li className="ConnectPage-range-item hvr-bob"
                        onClick={this.onDeselect.bind(this, data)}>
                        <i className="fa fa-times" />
                        {data}
                      </li>
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
            <i className="fa fa-caret-left hvr-wobble-horizontal"
              onClick={this.onScroll.bind(this, -1)} />
            <ul className="ConnectPage-category-major-list">
              <li className="ConnectPage-category-major-item">
                {this.state.cursor}
              </li>
            </ul>
            <i className="fa fa-caret-right hvr-wobble-horizontal"
              onClick={this.onScroll.bind(this, 1)} />
          </div>
          <div className="ConnectPage-category-minor">
            <ul className="ConnectPage-category-minor-list">
              {this.state.category[this.state.cursor].map(function(data, i) {
                let className = "ConnectPage-category-minor-item hvr-bob";
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
