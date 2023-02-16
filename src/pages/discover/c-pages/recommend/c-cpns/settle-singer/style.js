import styled from 'styled-components';
export const SettleSingerWrapper = styled.div`
  margin: 0 20px;
  margin-top: 15px;
  .singer-head {
    display: flex;

    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    .title {
      font-weight: bold;
    }
  }
  .apply-btn {
    background-position: right -100px;
    cursor: pointer;

    height: 31px;
    border-radius: 4px;
    margin: 10px 0 0 5px;
    line-height: 31px;
    i {
      display: inline-block;

      width: 170px;
      font-weight: bold;
      height: 31px;
      background-position: 0 -59px;
    }
  }
`;
