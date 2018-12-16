import React, { Component } from 'react';

import ContentMainAttention from '../recommend/contentMainAttention';    /*main attention*/

/**
 * @author hui
 * @date 2018/12/11
 * @Description: 热榜入口
*/
// @withRouter
class contentMainHot extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render(){
    return (
        <div>
            {/*关注问题*/}
            <ContentMainAttention />
        </div>

    )
  }
}
export default contentMainHot