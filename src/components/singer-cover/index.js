import React, { memo } from 'react';
import { SingerCoverWrapper } from './style';

const ZSingerCover = memo(function (props) {
  const { name, picUrl, description } = props.info;
  return (
    <SingerCoverWrapper>
      <a href="todos" className="singer-item">
        <div className="head">
          <img class="head-img" src={picUrl} alt="" />
        </div>
        <div className="info">
          <h4 className="name">{name}</h4>
          <p className="description">{description}</p>
        </div>
      </a>
    </SingerCoverWrapper>
  );
});
export default ZSingerCover;
