import React, { Component } from 'react';
import img from '../../assert/images/admin.jpg'

/**
 * 2018/8/17 @hui
 * 关注问题
*/
export default class ContentMainAttention extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
        }
    }

  render(){
    return (
      <div className="app-content-main-attention">
          <div className="app-card attention-item">
              <div className="attention-label">
                  <span>热门内容, 来自: 互联网</span>
                  <span className="attention-label-close"><i className="icon-close"></i></span>
              </div>
              <div className="attention-text">
                  <p>如何看待红芯宣布完成 2.5 亿 C 轮融资，却被网友发现其浏览器安装包解压出 Chrome？</p>
                  <div className="attention-text-con">
                      <p>8月15日，“红芯”公司宣布完成2.5亿C轮系列融资。据红芯自称，该公司打破美国垄断，推出世界第五颗也是唯一一颗属于中国…
                      <span className="special-text-con-more">阅读全文<i className="icon-down"></i></span>
                      </p>
                  </div>
              </div>
              <div className="attention-op">
                  <div className="attention-op-l">
                      <button className="app-btn app-btn-p" type="primary">关注问题</button>
                  </div>
                  <div className="attention-op-r">
                      <span><i className="icon-op-pl"></i>评论</span>
                      <span><i className="icon-op-fx"></i>分享</span>
                      <span><i className="icon-like"></i>收藏</span>
                      <span><i className="icon-op-jb"></i>举报</span>
                      <span><i className="icon-op-sl"></i></span>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}