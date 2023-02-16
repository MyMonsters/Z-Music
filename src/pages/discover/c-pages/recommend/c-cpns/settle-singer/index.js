import React, { memo, useState } from 'react';
import ZSingerCover from '../../../../../../components/singer-cover';
import { SettleSingerWrapper } from './style';

const ZSettleSinger = memo(function () {
  const [singerList, setsingerList] = useState([
    {
      name: '张惠妹aMEI',
      description: '台湾歌手张惠妹',
      picUrl:
        'https://p1.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62',
    },
    {
      name: '吴莫愁Momo',
      description: '《中国好声音》选手吴莫愁',
      picUrl:
        'https://p1.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=62y62',
    },
    {
      name: '孙楠',
      description: '歌手孙楠 代表作《你快回来》《燃烧》',
      picUrl:
        'https://p1.music.126.net/whG7pbsbd1akKtOE7V3R_Q==/109951168299161319.jpg?param=62y62',
    },
    {
      name: '麦田老狼',
      description: '歌手，音乐人。代表作《同桌的你》等。',
      picUrl:
        'https://p1.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=62y62',
    },
    {
      name: '陈楚生',
      description: '唱作歌手',
      picUrl:
        'https://p1.music.126.net/MXMZYksJmsa0gcGkuk2mDQ==/109951167712155407.jpg?param=62y62',
    },
  ]);
  return (
    <SettleSingerWrapper>
      <h3 className="singer-head">
        <span className="title">入驻歌手</span>
        <a href="todos">查看全部 {'>'}</a>
      </h3>
      <ul>
        {singerList.map((item, index) => {
          return (
            <li key={item.name}>
              <ZSingerCover info={item} />
            </li>
          );
        })}
      </ul>
      <div>
        <button className="sprite_button apply-btn">
          <i className="sprite_button content">申请称为网易云音乐人</i>
        </button>
      </div>
    </SettleSingerWrapper>
  );
});
export default ZSettleSinger;
