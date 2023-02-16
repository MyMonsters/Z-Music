import styled from 'styled-components';
export const SingerCoverWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .singer-item {
    background-color: #fafafa;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    .info {
      .name {
        margin-top: 8px;
        font-weight: bold;
      }
      .description {
        white-space: nowrap;
        overflow: hidden;
        width: 90%;
        text-overflow: ellipsis;
        word-wrap: normal;
      }
      width: 133px;
      height: 62px;
      padding-left: 14px;

      border: 1px solid #e9e9e9;
    }
    &:hover {
      text-decoration: none;
    }
  }
`;
