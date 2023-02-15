import { Carousel } from 'antd';
import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ZAlbumCover from '../../../../../../components/album-cover';
import ZThemeHeader from '../../../../../../components/theme-header-rcm';
// import { getNewAlbums } from '../../../../../../services/recommend';
import { getNewAlbumAction } from '../../store/ActionCreator';
import { NewAlbumWrapper } from './style';

const NewAlbum = memo(function () {
  //redux hook
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  );
  //other hooks
  const pageRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    //先测试一下请求是不是成功
    // getNewAlbums().then((res) => {
    //   console.log(res);
    // });
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  return (
    <NewAlbumWrapper>
      <ZThemeHeader title={'新碟上架'} />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => {
            pageRef.current.prev();
          }}
        ></button>
        <div className="album">
          <Carousel ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <div key={iten.id}>
                        <ZAlbumCover
                          info={iten}
                          key={iten.id}
                          size={100}
                          width={118}
                          bgp={'-570px'}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>

        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => {
            pageRef.current.next();
          }}
        ></button>
      </div>
    </NewAlbumWrapper>
  );
});
export default NewAlbum;
