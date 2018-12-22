/**
 * 歌曲列表展示组件 MusicList 组件使用
 *
 * 功能：
 *   1. 负责显示传入的所有歌曲
 *   2. 点击歌曲进行播放
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChangeCurrentMusic } from '../../store/actionCreator';

import './style.scss';

class ShowList extends Component {
  renderMusicList = () => {
    return this.props.list.map((item, index) => {
      return (
        <li key={item.id} className={index % 2 ? '' : 'highlight'}>
          <div className="music-name">
            <span onClick={() => this.props.handleChangeCurrentMusic(item)}>
              {item.name}
            </span>
          </div>
          <div className="singer-name">
            <span>{item.ar[0].name}</span>
          </div>
          <div className="album-name">
            <span>{item.al.name}</span>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="show-list-container">
        <ul>{this.renderMusicList()}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChangeCurrentMusic(item) {
      const action = getChangeCurrentMusic(item);
      dispatch(action);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShowList);