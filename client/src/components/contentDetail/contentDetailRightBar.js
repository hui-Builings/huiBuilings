import React, { Component } from 'react';
import { Button,Icon } from 'antd'
import img from '../../assert/images/admin.jpg'

/**
 * @author hui
 * @date 2018/12/7
 * @Description: 作者简介 | 被收藏统计 | 相关推荐 | 相关问题
 */
export default class ContentRightBar extends Component{
    constructor(props){
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
                  <h4 className="rightBar-title">作者简介</h4>
                  <div className="rightBar-intro-div rightBar-intro-top">
                      <img src={img} alt=""/>
                      <div>
                          <p className="name">猪小哼</p>
                          <p className="intro">我有一只别人家的狗</p>
                      </div>
                  </div>
                  <div className="rightBar-intro-div rightBar-intro-bot">
                      <div>
                          <p>回答</p>
                          <p>13</p>
                      </div>
                      <div>
                          <p>文章</p>
                          <p>3</p>
                      </div>
                      <div>
                          <p>关注者</p>
                          <p>543</p>
                      </div>
                  </div>
                  <div className="rightBar-intro-btn">
                      <Button type="primary"><Icon type="plus" />关注他</Button>
                      <Button type="default"><Icon type="message" />发私信</Button>
                  </div>
              </div>
          </div>

          {/*被收藏统计*/}
          <div className="app-card">
              <div className="rightBar-live">
                  <h4 className="rightBar-title">被收藏12次</h4>
                  <div className="rightBar-live-li">
                      <p>
                          <span>探索更大的世界</span>
                          <span><em>7,239</em>人关注</span>
                      </p>
                      <p><span>Eric</span>创建</p>
                  </div>
                  <div className="rightBar-live-li">
                      <p>
                          <span>探索更大的世界</span>
                          <span><em>7,239</em>人关注</span>
                      </p>
                      <p><span>Eric</span>创建</p>
                  </div>
                  <div className="rightBar-live-li">
                      <p>
                          <span>探索更大的世界</span>
                          <span><em>7,239</em>人关注</span>
                      </p>
                      <p><span>Eric</span>创建</p>
                  </div>
              </div>
          </div>

          {/*相关推荐*/}
          <div className="app-card">
              <div className="rightBar-recommend">
                  <h4 className="rightBar-title">相关推荐</h4>
                  <div className="rightBar-recommend-li">
                      <img src={img} alt=""/>
                      <div className="rightBar-recommend-li-r">
                         <p>前端开发者进阶：从工程师到leader之路</p>
                         <p>12人参与</p>
                      </div>
                  </div>
                  <div className="rightBar-recommend-li">
                      <img src={img} alt=""/>
                      <div className="rightBar-recommend-li-r">
                          <p>从 giser 到前端开发经理之路</p>
                          <p>12人参与</p>
                      </div>
                  </div>
                  <div className="rightBar-recommend-li">
                      <img src={img} alt=""/>
                      <div className="rightBar-recommend-li-r">
                          <p>前端开发者进阶：从工程师到leader之路</p>
                          <p>12人参与</p>
                      </div>
                  </div>
                  <div className="rightBar-recommend-li">
                      <img src={img} alt=""/>
                      <div className="rightBar-recommend-li-r">
                          <p>从 giser 到前端开发经理之路</p>
                          <p>12人参与</p>
                      </div>
                  </div>
              </div>
          </div>

          {/*相关问题*/}
          <div className="app-card">
              <div className="rightBar-question">
                  <h4 className="rightBar-title">相关问题</h4>
                  <div className="rightBar-question-li">
                      怎样系统地自学前端？ <span>78 个回答</span>
                  </div>
                  <div className="rightBar-question-li">
                      简要概述自学前端的5个月（大家来提提意见）？ <span>78 个回答</span>
                  </div>
                  <div className="rightBar-question-li">
                      都说前端学习是先平缓后陡峭再平缓，那这几个转折点大概对应哪一领域的知识？ <span>78 个回答</span>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}