import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ZThemeHeader from '../../../../../../components/theme-header-rcm';
import ZTopRanking from '../../../../../../components/top-ranking';
import { getTopList } from '../../../../../../services/recommend';
import { getTopListAction } from '../../store/ActionCreator';
import { RankingWrapper } from './style';

const ZRecommendRanking = memo(function (props) {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  );
  console.log(upRanking, newRanking, originRanking);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <ZThemeHeader title={'榜单'} />
      <div className="tops">
        <ZTopRanking info={upRanking} />
        <ZTopRanking info={newRanking} />
        <ZTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});

export default ZRecommendRanking;
