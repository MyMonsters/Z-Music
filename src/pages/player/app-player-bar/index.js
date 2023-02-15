import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  formatDate,
  getPlaySong,
  getSizeImage,
} from '../../../utils/format-utils';
import {
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
  changeSequenceAction,
  getLyricAction,
  getSongDetailAction,
} from '../store/actionCreator';
import { Control, Operator, PlayerBarWrapper, PlayInfo } from './style';
import { Slider } from 'antd';
import { message } from 'antd';
const ZAppPlayerBar = memo(function () {
  //props state

  const [currentTime, setcurrentTime] = useState(0);
  const [progressValue, setprogressValue] = useState(0);
  const [isChanging, setisChanging] = useState(false);
  const [isPlaying, setisPlaying] = useState(false);
  //redux
  const { currentSong, sequence, playList, lyricList, currentLyricIndex } =
    useSelector(
      (state) => ({
        currentSong: state.getIn(['player', 'currentSong']),
        sequence: state.getIn(['player', 'sequence']),
        playList: state.getIn(['player', 'playList']),
        lyricList: state.getIn(['player', 'lyricList']),
        currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
      }),
      shallowEqual
    );
  // const [currentLyricIndex, setcurrentLyricIndex] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
    dispatch(getLyricAction(167876));
  }, [dispatch]);
  useEffect(() => {
    console.log(audioRef.current.src);
    audioRef.current.src = getPlaySong(currentSong.id);
    // audioRef.current
    //   .play()
    //   .then((res) => {
    //     setisPlaying(true);
    //   })
    //   .catch((err) => {
    //     setisPlaying(false);
    //   });
  }, [currentSong]);
  const audioRef = useRef();

  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const Singername = (currentSong.ar && currentSong.ar[0].name) || '';
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, 'mm:ss');
  const showCurrentTime = formatDate(currentTime, 'mm:ss');
  //   let progressValue = (currentTime / duration) * 100;
  //handle
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setisPlaying(!isPlaying);
  };
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime * 1000;

    if (!isChanging) {
      setcurrentTime(currentTime);
      setprogressValue((currentTime / duration) * 100);
    }

    for (let i = 0; i < lyricList.length; i++) {
      // console.log(item);
      // console.log(currentTime);
      const item = lyricList[i];
      if (item.time > currentTime) {
        if (i - 1 !== currentLyricIndex) {
          dispatch(changeCurrentLyricIndexAction(i - 1));
          console.log(lyricList[i - 1]);
          const content = lyricList[i - 1] && lyricList[i - 1].content;

          message.open({
            key: 'lyric',
            content: 'kkk',

            // duration: 0,
          });
        }

        break;
      }
    }
  };
  const handleMusicEnded = () => {
    console.log(sequence);
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  };
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      audioRef.current.currentTime = 0;
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag));
  };
  const onChange = useCallback(
    (value) => {
      // console.log('onChange: ', value);
      setisChanging(true);
      const currentTime = (value / 100) * duration;
      setcurrentTime(currentTime);
      setprogressValue(value);
    },
    [duration]
  );

  const onAfterChange = useCallback(
    (value) => {
      // console.log('onAfterChange: ', value);
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setcurrentTime(currentTime * 1000); //容易错的
      setisChanging(false);
    },
    [duration]
  );
  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="lyric-class">{lyricList[currentLyricIndex].content}</div>

      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_player prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_player next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="todos">
              <img src={getSizeImage(picUrl, 34)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="sing-name">{currentSong.name}</span>
              <span className="singer-name">{Singername}</span>
            </div>
            <div className="progress">
              <Slider
                defaultValue={100}
                value={progressValue}
                onChange={onChange}
                onAfterChange={onAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_player btn playlist">
              {/* <span className="playCount">{playList.length}</span> */}
            </button>
          </div>
        </Operator>
        <audio
          ref={audioRef}
          onTimeUpdate={(e) => timeUpdate(e)}
          onEnded={(e) => handleMusicEnded()}
        ></audio>
      </div>
    </PlayerBarWrapper>
  );
});

export default ZAppPlayerBar;
