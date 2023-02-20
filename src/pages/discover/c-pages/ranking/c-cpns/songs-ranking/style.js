import styled from 'styled-components';
export const SongsRankingWrapper = styled.div``;
export const RankingInfoWrapper = styled.div`
  padding: 40px;
  display: flex;
  .cover {
    border: 1px solid #ccc;
    padding: 3px;
    position: relative;
    .mask {
      position: absolute;
      width: 150px;
      height: 150px;
      top: 3px;
      left: 3px;
      background-position: -230px -380px;
    }
  }
  .info {
    margin: 10px 25px 25px;
    line-height: 35px;
    .time-icon {
      position: absolute;
      margin: 9px 0 0 3px;
      height: 13px;
      width: 13px;
      background-position: -18px -682px;
    }
    .update-time {
      margin-left: 20px;
    }
  }
  .btn-groups {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    height: 31px;
    .play-btn {
      color: #fff;
      background-position: right -428px;
      height: 31px;
      line-height: 31px;
      cursor: pointer;
      i {
        color: #fff;
        height: 31px;
        display: inline-block;
        line-height: 31px;
        background-position: 0 -387px;
        padding: 0 7px 0 8px;
        .play {
          //重要
          vertical-align: middle;
          display: inline-block;
          width: 20px;
          height: 18px;
          background-position: 0 -1622px;
          overflow: hidden;
          margin: 2px 2px 2px 4px;
        }
        span {
          margin: 6px 2px 2px 4px;
          height: 38px;
        }
      }
    }
    .gray-btn {
      margin-left: 5px;
      background-position: right -1020px;
      height: 31px;
      padding: 0 5px 0 0;
      line-height: 30px;
      i {
        display: inline-block;

        height: 31px;
        min-width: 23px;
        line-height: 30px;
        padding-left: 28px;
        padding-right: 2px;
      }
    }
    .add-btn {
      background-position: 0 -1588px;
      width: 31px;
      margin-left: -3px;
      padding-right: 0;
      height: 31px;
      text-indent: -9999px;
    }
    .favor-btn {
      i {
        background-position: 0 -977px;
      }
    }

    .share-btn {
      /* background-position: right -1020px;
      margin-left: 5px;
      height: 31px;
      padding: 0 5px 0 0;
      line-height: 30px; */
      i {
        background-position: 0 -1225px;
      }
    }
    .download-btn {
      i {
        background-position: 0 -2761px;
      }
    }
    .comment-btn {
      i {
        background-position: 0 -1465px;
      }
    }
  }
`;
export const RankingWrapper = styled.div`
  padding: 0 30px 40px 40px;
  .title {
    display: flex;
    height: 33px;
    border-bottom: 2px solid #c20c0c;
    position: relative;
    h2 {
      font-size: 20px;
      line-height: 28px;
    }
    .all-song {
      margin: 9px 0 0 20px;
    }
    .playcount {
      position: absolute;
      right: 0;
      margin-top: 8px;
      strong {
        color: #c20c0c;
      }
    }
  }
  .song-toplist {
    width: 100%;
    border: 1px solid #d9d9d9;
    .table-wrapper {
      width: 100%;
      th {
        height: 38px;
        background-color: #f7f7f7;
        background-position: 0 0;
        background-repeat: repeat-x;
        text-align: left;
      }
      .first {
        width: 77px;
      }

      .wp {
        font-size: 12px;
        font-weight: normal;
        color: #666;
        height: 18px;
        line-height: 18px;
        /* padding: 8px 10px; */
        background-position: 0 -56px;
      }
      .third {
        width: 91px;
      }
      .fourth {
        width: 26%;
      }
      .num {
        padding: 0 20px;
        width: 25px;
        margin-left: 0;
        text-align: center;
        color: #999;
      }
      .rank :nth-child(3) {
        .paly {
          margin-top: 15px;
        }
      }
      .rank {
        padding: 10px 0;

        .play {
          display: inline-block;
          margin-right: 8px;

          margin-left: 14px;
          width: 17px;
          height: 17px;
          cursor: pointer;
          background-position: 0 -103px;
          vertical-align: middle;
        }
      }
      .even td {
        background-color: #f7f7f7;
      }
    }
  }
`;
