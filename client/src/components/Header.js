import React, { Component } from 'react';
import '../assert/css/style.scss';
import logo from '../assert/images/logo2.png';

class Header extends Component{

  render(){
    return (
      <div className="header">
          <div className="top">
            <div className="top-con">
                <div className="logo">
                    <span>H</span>
                </div>
                <div className="name">
                    <span>HUI</span>
                    <span>BUILING</span>
                </div>
                <div className="line"></div>
                <div className="contact">Please familiarize yourself with our offer</div>
                <div className="follow">Follow Me</div>
                <div className="up">∨</div>
            </div>
          </div>
          {/*<div className="bot">*/}
            {/*<div className="left">*/}
                {/*<img src={logo} alt=""/>*/}
            {/*</div>*/}
            {/*<div className="right">*/}
              {/*<span>登录</span>*/}
              {/*<span>注册</span>*/}
              {/*<span>留言</span>*/}
            {/*</div>*/}
          {/*</div>*/}
      </div>
    )
  }
}
export default Header