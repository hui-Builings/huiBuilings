import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Header from "./Header";
import ContentMainHome from "../components/contentMain/contentMainHome";
import ContentMainDetailHome from "../components/contentDetail/contentDetailHome";

/**
 * @author hui
 * @date 2018/12/9
 * @Description: 路由选择
 */
@withRouter
class ContentRouterSwitch extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const { pathname } = this.props.location;
        return (
            <div>
                <Header />
                <div className="app-content">
                    <div className='app-router'>
                        {/*首页*/}
                        {pathname === '/home/recommend'? <ContentMainHome name='推荐'/> : null}
                        {pathname === '/home/attention' ? <ContentMainHome name='关注'/> : null}
                        {pathname === '/home/hot' ? <ContentMainHome name='热榜'/> : null}

                        {/*发现*/}

                        {/*话题*/}

                        {/*详情*/}
                        {pathname.split('/:')[0] === '/home/recommend/detail' ? <ContentMainDetailHome /> : null}
                    </div>
                </div>
            </div>

        )
    }
}
export default ContentRouterSwitch