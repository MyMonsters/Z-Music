import React, { memo } from 'react'
import { getSizeImage } from '../../utils/format-utils';
import { SongRankingWrapper } from './style'

const ZSongRanking =  memo(function (props) {
  return (
   <SongRankingWrapper>
    <li key={props.item.id}>
                <div
                  className={
                    props.currentId === props.item.id ? 'item selected' : 'item'
                  }
                >
                  <a className="avatar" href="todos">
                    <img
                      src={getSizeImage(props.item.coverImgUrl, 40)}
                      alt="飙升榜"
                    />
                    <span className="mask"></span>
                  </a>
                  <div className="info">
                    <p className="name">
                      <a href="todos">{props.item.name}</a>{' '}
                    </p>
                    <p className="update">{props.item.updateFrequency}</p>
                  </div>
                </div>
              </li>
   </SongRankingWrapper>
  )
})

export default ZSongRanking;