import React, { Component } from 'react';
import '../../assert/css/style.scss';
import RightBar from "./RightBar";

class Content extends Component{
  render(){
    return (
      <div className="content">
          <div className="top-menu">
              <div className="top-all">
                  <div className="logo">
                      HuiBuiling
                  </div>
                  <ul>
                      <li className="active"><a href="#">INTRO</a></li>
                      <li><a href="#">DEVELOP</a></li>
                      <li><a href="#">INTEREST</a></li>
                      <li><a href="#">ABOUTUS</a></li>
                  </ul>
              </div>
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