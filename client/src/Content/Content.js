import React, { Component } from 'react';
import '../style.scss';
import RightBar from "./RightBar";

class Content extends Component{
  render(){
    return (
      <div className="content">
          <div className="top-menu">
              <ul>
                  <li><a href="#">简介</a></li>
                  <li><a href="#">发展</a></li>
                  <li><a href="#">兴趣</a></li>
                  <li><a href="#">关于</a></li>
              </ul>
          </div>
          {/*<header className="App-header">*/}
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              {/*<h1 className="App-title">Welcome to React</h1>*/}
          {/*</header>*/}
          <RightBar/>
      </div>
    )
  }
}
export default Content