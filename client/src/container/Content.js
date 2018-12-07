import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import ContentMainHome from "../components/contentMain/contentMainHome";
import ContentMainDetailHome from "../components/contentDetail/contentDetailHome";

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 主体部分：列表 + 菜单
 */
export default class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu:false,
            route:[
                {path:'/home', component:ContentMainHome},
                // {path:'/home/attention', component:ContentMainAttention},
                {path:'/attention', component:ContentMainDetailHome},
            ]
        }
    }

    render(){
        return (
            <div className="app-content">
                {/*路由*/}
                {
                    this.state.route.map(item=>{
                        return <Route key={item.path} exact={item.exact ? true:false} path={item.path} component={item.component}/>
                    })
                }
            </div>
        )
    }
}