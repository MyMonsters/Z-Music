import {
  getHotRecommends,
  getNewAlbums,
  getTopBanners,
  getTopList,
} from '../../../../../services/recommend';
import * as ActionTypes from './constants';

const changeTopBannerAction = (res) => ({
  type: ActionTypes.CHANGE_TOPBANNERS,
  topBanners: res.banners,
});
const changeHotRecommendAction = (res) => ({
  type: ActionTypes.CHANGE_HOTRECOMMENDS,
  hotRecommends: res.result,
});
const changeNewAlbumAction = (res) => ({
  type: ActionTypes.CHANGE_NEWALBUMS,
  newAlbums: res.albums,
});

const changeUpRankingAction = (res) => ({
  type: ActionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});
const changeNewRankingAction = (res) => ({
  type: ActionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});
const changeOriginRankingAction = (res) => ({
  type: ActionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      console.log(res);
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      console.log(res);
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      console.log(res);
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      console.log('topList', res);
      switch (id) {
        case 19723756:
          dispatch(changeUpRankingAction(res));
          break;
        case 3779629:
          dispatch(changeNewRankingAction(res));
          break;
        case 2884035:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
          break;
      }
    });
  };
};
