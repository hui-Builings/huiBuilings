import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import Header from "./Header";
import Login from "./Login";

import ContentMainHome from "../components/contentMain/contentMainHome";
import ContentMainDetailHome from "../components/contentDetail/contentDetailHome";
import MyDetail from "../components/my/MyDetail";

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
                //我的
                {path:'/myDetail', component:MyDetail},

                //首页-推荐
                {path:'/recommend', component:ContentMainHome},
                //关注
                {path:'/attention', component:ContentMainHome},
                //热榜
                {path:'/hot', component:ContentMainHome},

                //推荐-详情
                {path:'/question/detail/:id', component:ContentMainDetailHome},
            ]
        }
    }



    render(){
        return (
            <div className=''>
                {/*header*/}
                <Header/>

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