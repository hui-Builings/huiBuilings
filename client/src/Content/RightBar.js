import React, { Component } from 'react';
import '../style.scss';

class RightBar extends Component{
  render(){
    return (
      <div className="right-bar">
          <div className="bar-menu">
              <ul>
                  <li><a href="#">简介</a></li>
                  <li><a href="#">发展</a></li>
                  <li><a href="#">兴趣</a></li>
                  <li><a href="#">关于</a></li>
              </ul>
          </div>
          <div className="bar-bot">
              <div className="bar-bor">
                  <a href="#">QQ</a>
              </div>
          </div>
      </div>
    )
  }
}
export default RightBar