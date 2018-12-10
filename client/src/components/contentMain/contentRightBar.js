import React, { Component } from 'react';

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 右边主体
 */
export default class ContentRightBar extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render(){
    return (
      <div className="app-content-rightBar">
          <div className="app-card">
              <div className="rightBar-header">
                  <div>
                      <p><span><i className="icon-pro-live"></i></span></p>
                      <p><span>Live</span></p>
                  </div>
                  <div>
                      <p><span><i className="icon-pro-label"></i></span></p>
                      <p><span>书店</span></p>
                  </div>
                  <div>
                      <p><span><i className="icon-pro-pyq"></i></span></p>
                      <p><span>圆桌</span></p>
                  </div>
                  <div>
                      <p><span><i className="icon-pro-edit"></i></span></p>
                      <p><span>专栏</span></p>
                  </div>
                  <div>
                      <p><span><i className="icon-pro-fw"></i></span></p>
                      <p><span>付费咨询</span></p>
                  </div>
              </div>
          </div>
          <div className="app-card">
              <div className="rightBar-operation">
                  <p><span><i className="icon-like"></i>我的收藏</span></p>
                  <p><span><i className="icon-bar-gz"></i>我关注的问题</span></p>
                  <p className="active">
                      <span><i className="icon-bar-yq"></i>我的邀请</span>
                      <span className="rightBar-operation-num">
                          <em>3</em>
                      </span>
                  </p>
                  <p><span><i className="icon-bar-edit"></i>我的草稿</span></p>
                  <p><span><i className="icon-bar-sq"></i>我的审核</span></p>
              </div>
          </div>
      </div>
    )
  }
}