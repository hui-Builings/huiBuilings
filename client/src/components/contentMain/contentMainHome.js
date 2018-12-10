import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import ContentRightBar from './contentRightBar'                       /*main rightbar*/
import ContentMainHeader from './contentMainHeader';                  /*main header*/
import ContentMainSpecial from './content/contentMainSpecial';        /*main special*/
import ContentMainAttention from './content/contentMainAttention';    /*main attention*/
import ContentMainList from './content/contentMainList';              /*main item*/

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 左边主体 -> 专题/关注问题/列表  | 右边主体 -> 菜单
*/
@withRouter
class ContentMainHome extends Component{
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
                    <ContentMainHeader name={this.props.name}/>
                </div>

                <div className="">
                    {/*专题*/}
                    <ContentMainSpecial />

                    {/*关注问题*/}
                    <ContentMainAttention />

                    {/*列表*/}
                    <ContentMainList />
                </div>
            </div>

            <ContentRightBar />
        </div>

    )
  }
}
export default ContentMainHome