import React, { memo, useEffect } from 'react';
import { AllRankingWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ZSongRanking from '@/components/song-ranking';
import { getAllToplist } from '@/services/ranking';
import { getSizeImage } from '@/utils/format-utils';
import {
  changeCurrentId,
  getAllToplistAction,
  getCurrentToplistInfoAction,
  getCurrentToplistSongsAction,
} from '../../store/actionCreator';
const AllRanking = memo(function () {
  //props state

  //reducer
  const { currentId, allToplist } = useSelector(
    (state) => ({
      currentId: state.getIn(['ranking', 'currentId']),
      allToplist: state.getIn(['ranking', 'allToplist']),
    }),
    shallowEqual
  );
  console.log(allToplist);
  const dispatch = useDispatch();

  //other hooks
  useEffect(() => {
    dispatch(getAllToplistAction());
    dispatch(getCurrentToplistInfoAction(currentId));
    dispatch(getCurrentToplistSongsAction(currentId));
  }, []);

  const changeCurrentToplist = (id) => {
    dispatch(changeCurrentId(id));
    dispatch(getCurrentToplistInfoAction(id));
    dispatch(getCurrentToplistSongsAction(currentId));
  };
  return (
    <AllRankingWrapper>
      <h2 className="title">云音乐特色榜</h2>
      <ul>
        {allToplist.slice(0, 3).map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={(e) => changeCurrentToplist(item.id)}
              className="toplist-item"
            >
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
            <div
              key={item.id}
              className="toplist-item"
              onClick={(e) => changeCurrentToplist(item.id)}
            >
              <ZSongRanking item={item} currentId={currentId} />
            </div>
          );
        })}
      </ul>
    </AllRankingWrapper>
  );
});

export default AllRanking;
