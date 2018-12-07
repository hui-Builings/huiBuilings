import React, { Component } from 'react';

/**
 * @author hui
 * @date 2018/12/7
 * @Description: 热榜
 */
export default class ContentRightBar extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render(){
    return (
      <div className="app-content-hot">
          {/*热榜列表*/}
          <div className="app-card">
              <div className="hot-item">

              </div>
          </div>
      </div>
    )
  }
}