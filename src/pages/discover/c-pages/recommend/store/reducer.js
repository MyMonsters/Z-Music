import { Map } from 'immutable';
import * as ActionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: [],
  newRanking: [],
  originRanking: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_TOPBANNERS:
      return state.set('topBanners', action.topBanners);
    case ActionTypes.CHANGE_HOTRECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends);
    case ActionTypes.CHANGE_NEWALBUMS:
      return state.set('newAlbums', action.newAlbums);
    case ActionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking);
    case ActionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking);
    case ActionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking);
    default:
      return state;
  }
}

export default reducer;
