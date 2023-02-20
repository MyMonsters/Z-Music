import { Map } from 'immutable';
import {
  CHANGE_ALL_TOPLIST,
  CHANGE_CURRENT_TOPLIST_SONGS,
  CHANGE_CURRENT_TOPLIST_INFO,
  CHANGE_CURRENT_ID,
} from './constants';

const defaultState = Map({
  allToplist: [],
  currentToplistInfo: [],
  currentId: 19723756,
  currentToplistSongs: [],
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_ALL_TOPLIST:
      return state.set('allToplist', action.allToplist);
    case CHANGE_CURRENT_TOPLIST_INFO:
      return state.set('currentToplistInfo', action.currentToplistInfo);
    case CHANGE_CURRENT_TOPLIST_SONGS:
      return state.set('currentToplistSongs', action.currentToplistSongs);
    case CHANGE_CURRENT_ID:
      return state.set('currentId', action.currentId);
    default:
      return state;
  }
}
