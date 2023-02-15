import styled from 'styled-components';
export const PlayerBarWrapper = styled.div`
  position: fixed;

  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat-x;
  .lyric-class {
    position: relative;
    bottom: -100;
    /* bottom: -1000; */
    left: 200;
    height: 100px;
    background-color: gray;
    color: white;
  }
  .content {
    display: flex;
    position: absolute;
    height: 47px;
    left: 50%;
    justify-content: space-between;
    bottom: 0;
    transform: translateX(-50%);
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  button {
    cursor: pointer;
  }
  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }
  .prev:hover {
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
  }

  .next {
    background-position: -80px -130px;
  }
`;
export const PlayInfo = styled.div`
  color: white;
  width: 642px;
  display: flex;
  align-items: center;

  .image {
    margin: 6px 15px 0 0;
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }
  .info {
    flex: 1;
    color: #a1a1a1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .song {
      display: relative;
      top: 8px;
      left: 8px;
      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }
    .progress {
      display: flex;
      align-items: center;
      height: 9px;
      .ant-slider {
        width: 493px;
        margin-left: 0px;
        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }
        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
        }
      }
      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`;
export const Operator = styled.div`
  display: flex;
  /* position: relative;
  top: 5px; */
  .left {
    padding: 11px 2px 0 0;
  }
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }
  .right {
    padding: 11px 2px 0 0;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -238px;
    .volume {
      background-position: -2px -248px;
    }
    .loop {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return '-66px -248px';
          case 2:
            return '-66px -344px';
          default:
            return '-3px -344px';
        }
      }};
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;
      .playCount {
        /* line-height: 25px; */
        text-align: center;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        margin-left: 10px;
      }
    }
  }
`;
