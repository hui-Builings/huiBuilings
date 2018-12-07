import React, { Component } from 'react';

/**
 * @author hui
 * @date 2018/12/7
 * @Description: 作者简介 | 被收藏统计 | 相关推荐 | 相关问题
 */
export default class ContentRightBar extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
        }
    }

  render(){
    return (
      <div className="app-content-detail-rightBar">
          {/*作者简介*/}
          <div className="app-card">
              <div className="rightBar-intro">

              </div>
          </div>

          {/*被收藏统计*/}
          <div className="app-card">
              <div className="rightBar-live">

              </div>
          </div>

          {/*相关推荐*/}
          <div className="app-card">
              <div className="rightBar-recommend">

              </div>
          </div>

          {/*相关问题*/}
          <div className="app-card">
              <div className="rightBar-question">

              </div>
          </div>
      </div>
    )
  }
}