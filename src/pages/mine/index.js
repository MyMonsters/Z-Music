import React, { memo } from 'react';
import { MineWrapper } from './style';

const Zmine = memo(function Zmine() {
  return (
    <MineWrapper>
      <div className="container wrap-v2">
        <div className="mine-bg content">
          <div className="pic">
            <h2>登录网易云音乐</h2>
            <a href="todos" className="log-btn mine-bg">
              立即登录
            </a>
          </div>
        </div>
      </div>
    </MineWrapper>
  );
});
export default Zmine;
