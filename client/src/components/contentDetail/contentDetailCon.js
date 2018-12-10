import React, { Component } from 'react';
import img from '../../assert/images/admin.jpg'
import itemImg from '../../assert/images/bg.jpg'

/**
 * @author hui
 * @date 2018/12/7
 * @Description: 详情列表页
*/
export default class ContentMainDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            //问题详情简介
            mainData:[],
            //回答列表
            data:[{
                introduction:{
                    img:img,
                    name:'猪小哼',
                    text:'我有一只别人家的狗'
                },
                texts:{
                    title:'如何正确理解前后端分离?',
                    des:'Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面'
                }
            },{
                introduction:{
                    img:img,
                    name:'猪小哼',
                    text:'我有一只别人家的狗'
                },
                texts:{
                    title:'如何正确理解前后端分离?',
                    des:'Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面'
                }
            }]
        }
    }

  render(){
    return (
        <div>
              <div className="app-content-detail">
                  {
                      this.state.data.map((item,index)=>{
                          return (
                              <div className="app-card app-content-detail-item" key={index}>
                                  <div className="item-label">
                                      <span className="item-label-close"><i className="icon-close"></i></span>
                                  </div>
                                  <div className="item-introduction">
                                      <img src={item.introduction.img} alt=""/>
                                      <p className="item-name">{item.introduction.name}
                                          {/*{item.introduction.verified ? <i className="icon-op-rz"></i> : null}*/}
                                      </p>
                                      <p>{item.introduction.text ? <span className="item-des">{item.introduction.text}</span> : null}</p>
                                  </div>
                                  <div className="item-text">
                                      <img src={itemImg} alt=""/>
                                  </div>
                                  <div className="item-op">
                                      <div className="item-op-l">
                                          <div><span><i className="icon-op-up"></i>赞同137</span></div>
                                          <div><span><i className="icon-op-down"></i></span></div>
                                      </div>
                                      <div className="item-op-r">
                                          <span><i className="icon-op-pl"></i>评论</span>
                                          <span><i className="icon-op-fx"></i>分享</span>
                                          <span><i className="icon-like"></i>收藏</span>
                                          <span><i className="icon-op-jb"></i>举报</span>
                                          <span><i className="icon-op-sl"></i></span>
                                          <div className="app-popver item-op-r-popver"></div>
                                      </div>
                                      <div className="item-op-more"><span className="thems">阅读全文<i className="icon-down"></i></span></div>
                                  </div>
                              </div>
                          )
                      })
                  }
                  {/*
                  <div className="app-card app-content-main-list-item">
                    <div className="item-label">
                        <span>热门内容, 来自: </span>
                        <span>Web 开发</span>
                        <span className="item-label-close"><i className="icon-close"></i></span>
                        <Popover className="item-label-popover">
                            <div className="">
                                <p>huihui</p>
                                <span>热门内容, 来自: </span>
                            </div>
                        </Popover>
                    </div>
                    <div className="item-introduction">
                        <img src={img} alt=""/>
                        <span className="item-name">太平洋电脑网软件频道<i className="icon-op-rz"></i>,</span>
                        <span className="item-des">已认证的官方帐号</span>
                    </div>
                    <div className="item-text">
                        <p className="item-text-title">如何正确理解前后端分离?</p>
                        <div className="item-text-con">
                            <p>
                                Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                            </p>
                        </div>
                    </div>
                    <div className="item-op">
                        <div className="item-op-l">
                            <div><span><i className="icon-op-up"></i>赞同137</span></div>
                            <div><span><i className="icon-op-down"></i></span></div>
                        </div>
                        <div className="item-op-r">
                            <span><i className="icon-op-pl"></i>评论</span>
                            <span><i className="icon-op-fx"></i>分享</span>
                            <span><i className="icon-like"></i>收藏</span>
                            <span><i className="icon-op-jb"></i>举报</span>
                            <span><i className="icon-op-sl"></i></span>
                            <div className="app-popver item-op-r-popver"></div>
                        </div>
                        <div className="item-op-more"><span className="thems">阅读全文<i className="icon-down"></i></span></div>
                    </div>
                  </div>

                  <div className="app-card app-content-main-list-item img-item">
                      <div className="item-label">
                          <span>热门内容, 来自: </span>
                          <span>Web 开发</span>
                          <span className="item-label-close"><i className="icon-close"></i></span>
                          <Popover className="item-label-popover">
                              <div className="">
                                  <p>huihui</p>
                                  <span>热门内容, 来自: </span>
                              </div>
                          </Popover>
                      </div>
                      <div className="item-introduction">
                          <img src={img} alt=""/>
                          <span className="item-name">方应杭</span>
                          <span className="item-des">，微信 xiedaimala02，公众号 XDML，暗号：暖</span>
                      </div>
                      <div className="item-text">
                          <p className="item-text-title">如何正确理解前后端分离?</p>
                          <div className="item-text-con">
                              <img src={itemImg} alt=""/>
                              <p>
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                              </p>
                          </div>
                      </div>
                      <div className="item-op">
                          <div className="item-op-l">
                              <div><span><i className="icon-op-up"></i>赞同137</span></div>
                              <div><span><i className="icon-op-down"></i></span></div>
                          </div>
                          <div className="item-op-r">
                              <span><i className="icon-op-pl"></i>评论</span>
                              <span><i className="icon-op-fx"></i>分享</span>
                              <span><i className="icon-like"></i>收藏</span>
                              <span><i className="icon-op-jb"></i>举报</span>
                              <span><i className="icon-op-sl"></i></span>
                              <div className="app-popver item-op-r-popver"></div>
                          </div>
                          <div className="item-op-more"><span className="thems">阅读全文<i className="icon-down"></i></span></div>
                      </div>
                  </div>

                  <div className="app-card app-content-main-list-item">
                      <div className="item-label">
                          <span>热门内容, 来自: </span>
                          <span>Web 开发</span>
                          <span className="item-label-close"><i className="icon-close"></i></span>
                          <Popover className="item-label-popover">
                              <div className="">
                                  <p>huihui</p>
                                  <span>热门内容, 来自: </span>
                              </div>
                          </Popover>
                      </div>
                      <div className="item-introduction">
                          <img src={img} alt=""/>
                          <span className="item-name">方应杭</span>
                          <span className="item-renz">认证</span>
                          <span className="item-des">，微信 xiedaimala02，公众号 XDML，暗号：暖</span>
                      </div>
                      <div className="item-text">
                          <p className="item-text-title">如何正确理解前后端分离?</p>
                          <div className="item-text-con">
                              <p>
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                              </p>
                          </div>
                      </div>
                      <div className="item-op">
                          <div className="item-op-l">
                              <div><span><i className="icon-op-up"></i>赞同137</span></div>
                              <div><span><i className="icon-op-down"></i></span></div>
                          </div>
                          <div className="item-op-r">
                              <span><i className="icon-op-pl"></i>评论</span>
                              <span><i className="icon-op-fx"></i>分享</span>
                              <span><i className="icon-like"></i>收藏</span>
                              <span><i className="icon-op-jb"></i>举报</span>
                              <span><i className="icon-op-sl"></i></span>
                              <div className="app-popver item-op-r-popver"></div>
                          </div>
                          <div className="item-op-more"><span className="thems">阅读全文<i className="icon-down"></i></span></div>
                      </div>
                  </div>

                  <div className="app-card app-content-main-list-item img-item">
                      <div className="item-label">
                          <span>热门内容, 来自: </span>
                          <span>Web 开发</span>
                          <span className="item-label-close"><i className="icon-close"></i></span>
                          <Popover className="item-label-popover">
                              <div className="">
                                  <p>huihui</p>
                                  <span>热门内容, 来自: </span>
                              </div>
                          </Popover>
                      </div>
                      <div className="item-introduction">
                          <img src={img} alt=""/>
                          <span className="item-name">方应杭</span>
                          <span className="item-renz">认证</span>
                          <span className="item-des">，微信 xiedaimala02，公众号 XDML，暗号：暖</span>
                      </div>
                      <div className="item-text">
                          <p className="item-text-title">如何正确理解前后端分离?</p>
                          <div className="item-text-con">
                              <img src={itemImg} alt=""/>
                              <p>
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                                  Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面
                              </p>
                          </div>
                      </div>
                      <div className="item-op">
                          <div className="item-op-l">
                              <div><span><i className="icon-op-up"></i>赞同137</span></div>
                              <div><span><i className="icon-op-down"></i></span></div>
                          </div>
                          <div className="item-op-r">
                              <span><i className="icon-op-pl"></i>评论</span>
                              <span><i className="icon-op-fx"></i>分享</span>
                              <span><i className="icon-like"></i>收藏</span>
                              <span><i className="icon-op-jb"></i>举报</span>
                              <span><i className="icon-op-sl"></i></span>
                              <div className="app-popver item-op-r-popver"></div>
                          </div>
                          <div className="item-op-more"><span className="thems">阅读全文<i className="icon-down"></i></span></div>
                      </div>
                  </div>*/}
              </div>
        </div>
    )
  }
}