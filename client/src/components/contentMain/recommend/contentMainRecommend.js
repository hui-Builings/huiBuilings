import React, { Component } from 'react';

import ContentMainSpecial from './contentMainSpecial';        /*main special*/
import ContentMainAttention from './contentMainAttention';    /*main attention*/
import ContentMainList from './contentMainList';

/**
 * @author hui
 * @date 2018/12/11
 * @Description: 推荐入口
*/
// @withRouter
class contentMainRecommend extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render(){
    return (
        <div>
            {/*专题*/}
            <ContentMainSpecial />

            {/*关注问题*/}
            <ContentMainAttention />

            {/*列表*/}
            <ContentMainList />
        </div>

    )
  }
}
export default contentMainRecommend