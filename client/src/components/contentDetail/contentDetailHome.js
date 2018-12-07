import React, { Component } from 'react';

import ContentDetailHeader from './contentDetailHeader';
import ContentRightBar from './contentDetailRightBar';
import ContentMainDetail from './contentDetailCon'

/**
 * @author hui
 * @date 2018/12/7
 * @Description: 左边主体 -> 回答列表（详情） | 右边主体 -> 作者简介
*/
export default class ContentMainDetailHome extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render(){
    return (
        <div>
            <div className="app-content-main">
                <div className="app-card">
                    <ContentDetailHeader />
                </div>

                <ContentMainDetail />
            </div>

            <ContentRightBar />
        </div>
    )
  }
}