import styled from 'styled-components';
export const RankingWrapper = styled.div`
  min-height: 700px;
  display: flex;
  border: 1px solid #d3d3d3;
  /* background-color: #f5f5f5; */
`;
export const RankingLeft = styled.div`
  padding-top: 40px;
  width: 240px;
  .global-ranking {
    margin-top: 20px;
  }
  .selected {
    background-color: #e6e6e6;
  }
  .title {
    font-size: 14px;
    padding: 0 10px 12px 15px;
    font-family: 'Courier New', Courier, monospace;
    color: #333;
    font-weight: bold;
  }
`;
export const RankingRight = styled.div``;
