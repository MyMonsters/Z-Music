import styled from 'styled-components';
export const SongRankingWrapper = styled.div`
  .item {
    display: flex;
    cursor: pointer;
    padding: 10px 0 10px 16px;
    /* .avatar {
      &:hover {
        text-decoration: none;
      }
    } */
    a:hover {
      text-decoration: none;
    }
    .info {
      padding-left: 10px;
      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`;
