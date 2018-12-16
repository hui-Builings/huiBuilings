import React, { Component } from 'react';

import ContentMainSpecial from '../recommend/contentMainSpecial';        /*main special*/

/**
 * @author hui
 * @date 2018/12/11
 * @Description: 关注入口
*/
class ContentMainAttention extends Component{
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
        </div>

    )
  }
}
export default ContentMainAttention