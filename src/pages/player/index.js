import React, { memo } from 'react';
import { PlayerLeft, PlayerRight, PlayerWrapper } from './style';

const ZPlayer = memo(function index() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>ZPlayInfo</h2>
          <h2>ZSongInfo</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>SimiPlayList</h2>
          <h2>SimiSongList</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
export default ZPlayer;
