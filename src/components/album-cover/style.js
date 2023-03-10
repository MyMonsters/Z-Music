import styled from 'styled-components';
export const AlbumCoverWrapper = styled.div`
  width: ${(props) => props.width + 'px'};
  overflow: hidden;
  .album-image {
    position: relative;
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.size + 'px'};
    overflow: hidden;
    margin-top: 15px;
    img {
      width: ${(props) => props.size + 'px'};
      height: ${(props) => props.size + 'px'};
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
    .album-info {
      font-size: 12px;
      width: ${(props) => props.size};
      font-family: Arial, Helvetica, sans-serif;
      .name {
        color: #000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .artist {
        color: #666;
      }
    }
  }
`;
