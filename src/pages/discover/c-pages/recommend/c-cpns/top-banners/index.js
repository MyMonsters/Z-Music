import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from '../../store/ActionCreator';

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style';
import { Carousel } from 'antd';
const ZTopBanner = memo(function ZTopBanner(props) {
  //redux数据相关
  const { topBanners } = useSelector((state) => ({
    // topBanners: state.get('recommend').get('topBanners'),
    topBanners: state.getIn(['recommend', 'topBanners']),
  }));
  const dispatch = useDispatch();
  const [currentIndex, setcurrentIndex] = useState(0);
  //其他hooks
  const CarouselRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setcurrentIndex(to);
  }, []);

  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + '?imageView&blur=40x20';
  //其他业务逻辑
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="wrap-v2 banner">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay={true}
            ref={CarouselRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => CarouselRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => CarouselRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default ZTopBanner;
