import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { getSongDetailAction } from '../../pages/player/store';
import { getSizeImage } from '../../utils/format-utils';
import { TopRankingWrapper } from './style';

const ZTopRanking = memo(function (props) {
  //props and state
  const { info } = props;
  console.log(info);
  const { tracks = [] } = info;
  //redux hook
  const dispatch = useDispatch();
  //other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="todo" className="image_cover">
            ranking
          </a>
        </div>

        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>

      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank"> {index + 1} </div>
              <div className="info">
                <div className="name text-nowrap">{item.name}</div>
                <div className="operate ">
                  <button
                    className="btn play sprite_02"
                    onClick={(e) => playMusic(item)}
                  ></button>
                  <button className="btn addto sprite_icon2"></button>
                  <button className="btn favor sprite_02"></button>
                </div>
              </div>
            </div>
          );
        })}
        {/* {info.tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank"> {index + 1} </div>
              <div className="name">{item.name}</div>
              <div className="operate">
                <button className="btn play sprite_02"></button>
                <button className="btn addto sprite_icon2"></button>
                <button className="btn favor sprite_02"></button>
              </div>
            </div>
          );
        })} */}
      </div>
      <div className="footer">
        <a href="/to">查看全部{'>'}</a>
      </div>
    </TopRankingWrapper>
  );
});

export default ZTopRanking;
