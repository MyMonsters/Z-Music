import { Map } from 'immutable';
import { CHANGE_ALL_TOPLIST, CHANGE_CURRENT_TOPLIST } from './constants';

const defaultState = Map({
  allToplist: [],
  currentToplist: [],
  currentId: 19723756,
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_ALL_TOPLIST:
      return state.set('allToplist', action.allToplist);
    case CHANGE_CURRENT_TOPLIST:
      return state.set('currentToplist', action.currentToplist);
    default:
      return state;
  }
}
