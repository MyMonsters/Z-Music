import { getAllToplist } from '../../../../../services/ranking';
import { getTopList } from '../../../../../services/recommend';
import * as actionTypes from './constants';
const changeAllToplistAction = (res) => ({
  type: actionTypes.CHANGE_ALL_TOPLIST,
  allToplist: res.list,
});

const changeCurrentToplistAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_TOPLIST,
  currentToplist: res.playlist,
});

export const getAllToplistAction = () => {
  return (dispatch) => {
    getAllToplist().then((res) => {
      console.log(res);
      dispatch(changeAllToplistAction(res));
    });
  };
};

export const getCurrentToplistAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      dispatch(changeCurrentToplistAction(res));
    });
  };
};
