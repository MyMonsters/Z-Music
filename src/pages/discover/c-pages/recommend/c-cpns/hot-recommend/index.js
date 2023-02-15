import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { HOT_RECOMMEND_LIMIT } from '../../../../../../common/constants';
import ZSongsCover from '../../../../../../components/songs-cover';
import ZThemeHeader from '../../../../../../components/theme-header-rcm';

import { getHotRecommendAction } from '../../store/ActionCreator';
import { HotRecommendWrapper } from './style';

const HotRecommend = memo(function HotRecommend() {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <ZThemeHeader
        title={'热门推荐'}
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <ZSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default HotRecommend;
