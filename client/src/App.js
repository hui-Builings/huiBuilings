import React, { Component } from 'react';
import './assert/css/app.scss';
import { Route } from 'react-router-dom';

// import Content from "./container/Content";
import Login from "./container/Login";
import ContentRouterSwitch from "./container/RouterWitch";

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 入口
 */
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu:false,
            route:[
                {path:'/login', component:Login},

                //推荐
                {path:'/home/recommend', component:ContentRouterSwitch, name:'推荐'},
                //关注
                {path:'/home/attention', component:ContentRouterSwitch, name:'关注'},
                //热榜
                {path:'/home/hot', component:ContentRouterSwitch, name:'热榜'},
                //详情
                {path:'/home/recommend/detail:/id', component:ContentRouterSwitch, name:'详情'},
            ]
        }
    }

    render() {
        return (
            <div className="app">
                {/*路由*/}
                {
                    this.state.route.map(item=>{
                        return <Route key={item.path} exact={item.exact ? true:false} path={item.path} component={item.component} name={item.name}/>
                    })
                }
            </div>
        );
    }
}
