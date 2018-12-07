import React, { Component } from 'react';
import ContentMainHeader from '../contentBar/contentMainHeader';     /*main header*/
import ContentMainSpecial from '../content/contentMainSpecial';      /*main special*/
import ContentMainAttention from '../content/contentMainAttention';    /*main attention*/
import ContentMainList from '../content/contentMainList';         /*main item*/

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
              {/*专题*/}
              <ContentMainSpecial />

              {/*关注问题*/}
              <ContentMainAttention />

              {/*列表*/}
              <ContentMainList />
          </div>

          <div>
              {/*详情*/}
          </div>
      </div>
    )
  }
}