import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
const CReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
});
export default CReducer;
