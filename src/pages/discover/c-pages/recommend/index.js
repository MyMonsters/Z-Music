import React, { memo } from 'react';
import ZHotDJ from './c-cpns/hot-dj';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import ZRecommendRanking from './c-cpns/recommend-ranking';
import ZSettleSinger from './c-cpns/settle-singer';
import ZTopBanner from './c-cpns/top-banners';
import UserLogin from './c-cpns/user-login';
import {
  Content,
  RecommendLeft,
  RecommendRight,
  RecommendWrapper,
} from './style';

const ZRecommend = memo(function ZRecommend(props) {
  return (
    <RecommendWrapper>
      <ZTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <ZRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <ZSettleSinger />
          <ZHotDJ />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});
export default ZRecommend;
// const mapStateToProps = (state) => ({
//   topBanners: state.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ZRecommend);
