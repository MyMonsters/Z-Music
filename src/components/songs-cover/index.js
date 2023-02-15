import React, { memo } from 'react';
import { getCount, getSizeImage } from '../../utils/format-utils';
import { SongsCoverWrapper } from './style';

const ZSongsCover = memo(function (props) {
  const { info } = props;
 
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite-cover">
          <div className="info sprite-cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">{info.name}</div>
      <div className="cover-source">by {info.copywriter}</div>
    </SongsCoverWrapper>
  );
});
export default ZSongsCover;
