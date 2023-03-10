import React, { memo } from 'react';
import { getSizeImage } from '../../utils/format-utils';
import { AlbumCoverWrapper } from './style';

const ZAlbumCover = memo(function ZAlbumCover(props) {
  const { info, width = 153, size = 130, bgp = '-845px' } = props;
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/todo" className="cover image_cover">
          {' '}
        </a>
      </div>

      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  );
});

export default ZAlbumCover;
