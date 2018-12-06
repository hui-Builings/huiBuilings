import React, { Component } from 'react';
import ContentMainHeader from './contentMainHeader';     /*main header*/
import ContentMainSpecial from './contentMainSpecial';      /*main special*/
import ContentMainAttention from './contentMainAttention';    /*main attention*/
import ContentMainList from './contentMainList';         /*main item*/

/**
 * 2018/8/15 @hui
 * left main
 */
export default class ContentMain extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
        }
    }

  render(){
    return (
      <div className="app-content-main">
          <div className="app-card">
              <ContentMainHeader />
          </div>
          <div className="">
              <ContentMainSpecial />
              <ContentMainAttention />
              <ContentMainList />
          </div>
      </div>
    )
  }
}