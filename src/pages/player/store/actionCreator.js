import { getLyric, getSongDetail } from '../../../services/player';
import { getRandomNum } from '../../../utils/math-utils';
import { parseLyric } from '../../../utils/parse-lyrics';
import * as actionTypes from './constants';

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
});
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});
export const changeCurrentLyricIndexAction = (currentLyricIndex) =>({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})
export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(['player', 'sequence']);
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex']);
    const playList = getState().getIn(['player', 'playList']);

    switch (sequence) {
      case 1:
        let index = getRandomNum(playList.length);

        while (index === currentSongIndex) {
          index = getRandomNum(playList.length);
        }
        currentSongIndex = index;
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0;
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1;
        }
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(playList[currentSongIndex]));
    dispatch(getLyricAction(currentSong.id));
  };
};
export function getSongDetailAction(ids) {
  return (dispatch, getState) => {
    //根据id查找playList是否有了当前歌曲
    const playList = getState().getIn(['player', 'playList']);
    const index = playList.findIndex((song) => song.id === ids);
    let song = null;
    console.log(index);
    if (index !== -1) {
      //当前playList有当前歌曲
      song = playList[index];
      dispatch(changeCurrentSongAction(song));
      console.log(song.id);
      dispatch(changeCurrentSongIndexAction(index));
      dispatch(getLyricAction(song.id));
    } else {
      getSongDetail(ids).then((res) => {
        song = res.songs && res.songs[0];
        if (!song) {
          return;
        }
        //将最新请求的数据添加到播放列表里面
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
        dispatch(getLyricAction(song.id));
      });
    }
    if (!song) return;
  };
}
export function getLyricAction(id) {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyricList = parseLyric(res.lrc.lyric);
      console.log(lyricList);
      dispatch(changeLyricListAction(lyricList));
    });
  };
}
