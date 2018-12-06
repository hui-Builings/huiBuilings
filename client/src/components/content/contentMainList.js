import React, { Component } from 'react';
import Popover from '../common/popover';
import img from '../../assert/images/admin.jpg'
import itemImg from '../../assert/images/bg.jpg'

/**
 * 2018/8/15 @hui
 * 数据列表
 */
export default class ContentMainList extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
            data:[{
                label:{
                    label:'来自话题',
                    title:'情绪'
                },
                introduction:{
                    img:img,
                    name:'方应杭',
                    text:'微信 xiedaimala02，公众号 XDML，暗号：知乎'
                },
                texts:{
                    title:'如何正确理解前后端分离?',
                    des:'Chrome的主界面已经好久好久没有更新了，它的梯形标签页似乎已经成为了祖传的经典。然而Google最近有了改进界面的想法，Chrome要进行界面大改版了！现在Google已经率先把新界面'
                }
            },{
                label:{
                    label:'热门内容, 来自',
                    title:'前端开发'
                },
                introduction:{
                    img:img,
                    name:'技能树IT修真院',
                    text:'已认证的官方帐号',
                    verified:true
                },
                texts:{
                    img:itemImg,
                    title:'前端工程师的技术进阶点在哪里?',
                    des:'阿里前端的困局与突围 · Issue #141 · lifesinger/blog）的，前端只是薄薄的一层，即便是部分业务场景很复…'
                }
            },{
                label:{
                    label:'热门内容, 来自',
                    title:'Google Chrome'
                },
                introduction:{
                    img:img,
                    name:'liasy',
                },
                texts:{
                    title:'如何看待【红芯回应“抄袭门”：站在巨人肩膀上做了创新】？',
                    des:'重新定义"自主可控"：下载 Chromium 源码，改一改，声称这是自主的，并在官网宣传"浏览器内核代码超1000万行"，一千万行里有几行是你的？ 重新定义"内核"：官网宣传时将内核与 Trident…'
                }
            },{
                label:{
                    label:'热门内容, 来自',
                    title:'前端开发'
                },
                introduction:{
                    img:img,
                    name:'于江水',
                    text:'Web 独立开发者 | 但行好事，莫问前程'
                },
                texts:{
                    img:itemImg,
                    title:'前端工程师的技术进阶点在哪里?',
                    des:'阿里前端的困局与突围 · Issue #141 · lifesinger/blog）的，前端只是薄薄的一层，即便是部分业务场景很复…'
                }
            }]
        }
    }

  render(){
    return (
      <div className="app-content-main-list">
          {
              this.state.data.map((item,index)=>{
                  let classNames="app-card app-content-main-list-item";
                  if(item.texts.img){
                      classNames="app-card app-content-main-list-item img-item";
                  }
                  return (
                      <div className={classNames} key={index}>
                          <div className="item-label">
                              <span>{item.label.label}: </span>
                              <span className="item-label-title">{item.label.title}</span>
                              <span className="item-label-close"><i className="icon-close"></i></span>
                              <Popover className="item-label-popover" visible>
                                  <div className="">
                                      <p>huihui</p>
                                      <span>热门内容, 来自: </span>
                                  </div>
                              </Popover>
                          </div>
                          <div className="item-introduction">
                              <img src={item.introduction.img} alt=""/>
                              <span className="item-name">{item.introduction.name}
                                  {item.introduction.verified ? <i className="icon-op-rz"></i> : null}
                              </span>
                              {item.introduction.text ? <span className="item-des">{item.introduction.text}</span> : null}
                          </div>
                          <div className="item-text">
                              <p className="item-text-title">{item.texts.title}</p>
                              <div className="item-text-con">
                                  {item.texts.img ? <img src={item.texts.img} alt=""/> : null}
                                  <p>{item.texts.des}</p>
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
                  <span className="item-des">，微信 xiedaimala02，公众号 XDML，暗号：知乎</span>
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
                  <span className="item-des">，微信 xiedaimala02，公众号 XDML，暗号：知乎</span>
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
                  <span className="item-des">，微信 xiedaimala02，公众号 XDML，暗号：知乎</span>
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
    )
  }
}