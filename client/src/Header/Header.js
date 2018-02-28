import React, { Component } from 'react';
import '../style.scss';
import logo from '../assert/logo2.png';

class Header extends Component{

  render(){
    return (
      <div className="header">
        <div className="left">
            <img src={logo} alt=""/>
        </div>
        <div className="right">
          <span>登录</span>
          <span>注册</span>
          <span>留言</span>
        </div>
      </div>
    )
  }
}
export default Header