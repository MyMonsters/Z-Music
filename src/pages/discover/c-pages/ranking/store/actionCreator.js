import { getAllToplist } from '../../../../../services/ranking';
import { getTopList } from '../../../../../services/recommend';
import * as actionTypes from './constants';
const changeAllToplistAction = (res) => ({
  type: actionTypes.CHANGE_ALL_TOPLIST,
  allToplist: res.list,
});

const changeCurrentToplistInfoAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_TOPLIST_INFO,
  currentToplistInfo: res,
});
const changeCurrentToplistSongsAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_TOPLIST_SONGS,
  currentToplistSongs: res.tracks,
});
export const changeCurrentId = (id) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  currentId: id
})
export const getAllToplistAction = () => {
  return (dispatch) => {
    getAllToplist().then((res) => {
      console.log(res);
      dispatch(changeAllToplistAction(res));
    });
  };
};

export const getCurrentToplistInfoAction = (id) => {
  return (dispatch) => {
    getAllToplist().then((res) => {
      console.log(res);
      const currentToplist = res.list.filter((item, index) => {
        return item.id === id;
      });
      dispatch(changeCurrentToplistInfoAction(currentToplist[0]));
    });

    // getTopList(id).then((res) => {
    //   dispatch(changeCurrentToplistAction(res));
    // });
  };
};

export const getCurrentToplistSongsAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      console.log(res);
      dispatch(changeCurrentToplistSongsAction(res.playlist));
    });
  };
};
