import React, { Component } from 'react';

/**
 * @author hui
 * @date 2018/12/7
 * @Description: 关注列表
 */
export default class ContentRightBar extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render(){
    return (
      <div className="app-content-attention">
          {/*关注列表*/}
          <div className="app-card">
              <div className="attention-item">

              </div>
          </div>
      </div>
    )
  }
}