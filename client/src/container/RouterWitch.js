import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import Login from "./Login";
import Header from "./Header";
import ContentMainHome from "../components/contentMain/contentMainHome";
import ContentMainDetailHome from "../components/contentDetail/contentDetailHome";

/**
 * @author hui
 * @date 2018/12/9
 * @Description: 路由选择
 */
class ContentRouterSwitch extends Component{
    constructor(props){
        super(props);
        this.state = {
            route:[
                //登录
                {path:'/login', component:Login},

                //首页-推荐
                {path:'/recommend', component:ContentMainHome, name:'推荐'},
                //关注
                {path:'/attention', component:ContentMainHome, name:'关注'},
                //热榜
                {path:'/hot', component:ContentMainHome, name:'热榜'},

                //推荐-详情
                {path:'/question/detail/:id', component:ContentMainDetailHome, name:'详情'},
            ]
        }
    }

    render(){
        // const { pathname } = this.props.location;
        return (
            <div>
                <Header />
                <div className="app-content">
                    <div className='app-router'>
                        {/*路由*/}
                        <Switch>
                            {this.state.route.map(item=>{
                                    return <Route
                                                key={item.path}
                                                exact={item.exact ? true:false}
                                                path={item.path}
                                                component={item.component}
                                                name={item.name}
                                            />
                            })}
                        </Switch>
                    </div>
                </div>
            </div>

        )
    }
}
export default ContentRouterSwitch