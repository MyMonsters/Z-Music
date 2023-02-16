import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ZSongRanking from '../../../../components/song-ranking';
import { getAllToplist } from '../../../../services/ranking';
import { getSizeImage } from '../../../../utils/format-utils';
import {
  getAllToplistAction,
  getCurrentToplistAction,
} from './store/actionCreator';
import { RankingLeft, RankingRight, RankingWrapper } from './style';

const ZRanking = memo(function ZRanking() {
  //props state

  //reducer
  const { currentId, allToplist, currentToplist } = useSelector(
    (state) => ({
      currentId: state.getIn(['ranking', 'currentId']),
      allToplist: state.getIn(['ranking', 'allToplist']),
      currentToplist: state.getIn(['ranking', 'currentToplist']),
    }),
    shallowEqual
  );
  console.log(allToplist);
  const dispatch = useDispatch();

  //other hooks
  useEffect(() => {
    dispatch(getAllToplistAction());
    dispatch(getCurrentToplistAction(currentId));
  }, []);
  return (
    <RankingWrapper className="wrap-v2 wrap3-bg">
      <RankingLeft>
        <h2 className="title">云音乐特色榜</h2>
        <ul>
          {allToplist.map((item, index) => {
            if (index >= 4) return;
            return (
              <div key={item.id}>
                <ZSongRanking item={item} currentId={currentId} />
              </div>
            );
          })}
        </ul>
        <div className="global-ranking"></div>
        <h2 className="title">全球媒体榜</h2>
        <ul>
          {allToplist.map((item, index) => {
            if (index < 4) return;
            return (
              <div key={item.id}>
                <ZSongRanking item={item} currentId={currentId} />
              </div>
            );
          })}
        </ul>
      </RankingLeft>
      <RankingRight>RankingRight</RankingRight>
    </RankingWrapper>
  );
});

export default ZRanking;
