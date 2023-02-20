import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { formatMonthDay, getSizeImage } from '@/utils/format-utils';
import {
  RankingInfoWrapper,
  RankingWrapper,
  SongsRankingWrapper,
} from './style';
import { formatDate } from '../../../../../../utils/format-utils';

const SongsRanking = memo(function () {
  //props state

  //redux
  const { currentToplist, currentToplistSongs } = useSelector((state) => ({
    currentToplist: state.getIn(['ranking', 'currentToplistInfo']),
    currentToplistSongs: state.getIn(['ranking', 'currentToplistSongs']),
  }));

  console.log(currentToplistSongs);
  return (
    <SongsRankingWrapper>
      <RankingInfoWrapper>
        <div className="cover ">
          <img src={getSizeImage(currentToplist.coverImgUrl, 150)} alt="" />
          <span className="image_cover mask "></span>
        </div>
        <div className="info">
          <h2>{currentToplist.name}</h2>
          <div className="update">
            <i className="sprite_icon2 time-icon"></i>
            <span className="update-time">
              最近更新:{formatMonthDay(currentToplist.updateTime)}
            </span>
            <span>{currentToplist.updateFrequency}</span>
          </div>
          <div className="btn-groups">
            <a href="todos" className="play-btn sprite_button">
              <i className="sprite_button">
                <i className="play sprite_button"></i>
                播放
              </i>
            </a>
            <a href="todos" className="add-btn sprite_button">
              d
            </a>
            <a href="todos" className="favor-btn gray-btn sprite_button">
              <i className="sprite_button">{currentToplist.subscribedCount}</i>
            </a>
            <a href="todos" className="share-btn gray-btn sprite_button">
              <i className="sprite_button">324</i>
            </a>
            <a href="todos" className="download-btn gray-btn sprite_button">
              <i className="sprite_button">下载</i>
            </a>
            <a href="todos" className="comment-btn gray-btn sprite_button">
              <i className="sprite_button">432432</i>
            </a>
          </div>
        </div>
      </RankingInfoWrapper>
      <RankingWrapper>
        <div className="title">
          <h2>歌曲列表</h2>
          <span className="all-song">100首歌</span>
          <div className="playcount">
            播放：<strong> {currentToplist.playCount}</strong>次
          </div>
        </div>
        <div className="song-toplist">
          <table className="table-wrapper">
            <thead>
              <tr>
                <th class="first w1 sprite_table"></th>
                <th className="sprite_table">
                  <div class="wp sprite_table">标题</div>
                </th>
                <th class="third sprite_table">
                  <div class="wp">时长</div>
                </th>
                <th class="fourth sprite_table">
                  <div class="wp">歌手</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentToplistSongs.map((item, index) => {
                return (
                  <tr
                    key={item.name}
                    className={(index + 1) % 2 === 0 ? '' : 'even'}
                  >
                    <td>
                      <span className="num">{index}</span>
                    </td>

                    <td className="rank">
                      {index < 3 && (
                        <a href="todos">
                          <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                        </a>
                      )}
                      <span className="play sprite_table"></span>
                      {item.al.name}
                    </td>
                    <td>{formatDate(item.dt, 'mm:ss')}</td>
                    <td>{item.ar ? item.ar[0].name : ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </RankingWrapper>
    </SongsRankingWrapper>
  );
});
export default SongsRanking;
