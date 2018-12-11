import React, { Component } from 'react';
import { Route,withRouter } from 'react-router-dom';

import ContentMainHeader from './contentMainHeader';                  /*main header*/
import ContentRightBar from './contentRightBar'                       /*main rightbar*/

import contentMainRecommend from './recommend/contentMainRecommend';
import ContentMainAttention from './attention/contentMainAttention';
import contentMainHot from './hot/contentMainHot';

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 头部主体 | 左边主体 -> 专题/关注问题/列表  | 右边主体 -> 菜单
*/
@withRouter
class ContentMainHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            routeMain:[
                //首页-推荐
                {path:'/recommend', component:contentMainRecommend},
                //关注
                {path:'/attention', component:ContentMainAttention},
                //热榜
                {path:'/hot', component:contentMainHot},

            ]
        }
    }

  render(){
        return (
            <div>
                <div className="app-content-main">
                    <div className="app-card">
                        {/*头部*/}
                        <ContentMainHeader name={this.props.name}/>
                    </div>

                    {/*内容*/}
                    {this.state.routeMain.map(item=>{
                        return <Route
                                    key={item.path}
                                    exact={item.exact ? true:false}
                                    path={item.path}
                                    component={item.component}
                                />
                    })}
                </div>

                {/*右侧*/}
                <ContentRightBar />
            </div>
        )
  }
}
export default ContentMainHome