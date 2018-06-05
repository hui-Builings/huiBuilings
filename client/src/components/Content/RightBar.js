import React, { Component } from 'react';
import '../../assert/css/style.scss';
import News from '../News/News'
import Home from '../Home/Home'
import { Switch, Route } from 'react-router-dom'

class RightBar extends Component{
  render(){
    return (
      <div className="right-bar">
          {/*<div className="bar-menu">
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
          </div>*/}
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/news' component={News}/>
          </Switch>
      </div>
    )
  }
}
export default RightBar