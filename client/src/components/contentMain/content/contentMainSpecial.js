import React, { Component } from 'react';
import specialImg from '../../../assert/images/special.jpg';

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 左边主体/专题
 */
export default class ContentMainSpecial extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
        }
    }

  render(){
    return (
      <div className="app-content-main-special">
          <div className="app-card special-item">
                <div className="special-label">
                    <span>七夕专题 · 19 分钟前 </span>
                    <span className="special-label-close"><i className="icon-close"></i></span>
                </div>
                <div className="special-img">
                    <img src={specialImg} alt=""/>
                </div>
                <div className="special-text">
                    <p>被爱情难倒的，请举手</p>
                    <div className="special-text-con">
                        <p>单身时想要恋爱，终于不再单身了，又发现两个人相处好难。 不在一起不开心，在一起好像也并没有那么难</p>
                    </div>
                </div>
                <div className="special-op">
                    <button className="app-btn app-btn-p" type="primary">点击查看专题 >>></button>
                    <span>18,519,386 浏览</span>
                </div>
          </div>
      </div>
    )
  }
}