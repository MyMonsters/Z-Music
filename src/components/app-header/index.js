import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { headerLinks } from '../../common/local-data';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderRight, HeaderLeft } from './style';

export default memo(function ZAppHeader() {
  const ShowSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          {/* <NavLink to="/"></NavLink> */}
          <a href="#/" className="logo sprite_01" rel="noopener noreferrer">
            {' '}
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {ShowSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <button className="center">创作者中心</button>
          <div className="login-btn">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      {/* <NavLink to="/">发现音乐</NavLink>

      <NavLink to="/mine">我的音乐</NavLink>
      <NavLink to="/friend">我的朋友</NavLink> */}
    </HeaderWrapper>
  );
});
