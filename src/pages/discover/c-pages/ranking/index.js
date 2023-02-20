import React, { memo, useEffect } from 'react';
import AllRanking from './c-cpns/allRanking';

import SongsRanking from './c-cpns/songs-ranking';

import { RankingLeft, RankingRight, RankingWrapper } from './style';

const ZRanking = memo(function ZRanking() {
  return (
    <RankingWrapper className="wrap-v2 wrap3-bg">
      <RankingLeft>
        <AllRanking />
      </RankingLeft>
      <RankingRight>
        <SongsRanking />
      </RankingRight>
    </RankingWrapper>
  );
});

export default ZRanking;
