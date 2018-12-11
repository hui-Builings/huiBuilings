import React, { Component } from 'react';

import Header from "./Header";
// import ContentMainHome from "../components/contentMain/contentMainHome";
// import ContentMainDetailHome from "../components/contentDetail/contentDetailHome";

/**
 * @author hui
 * @date 2018/8/15
 * @Description: ?
 */
export default class Content extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Header />
                <div className="app-content">
                    <div className='app-router'>
                        {/*首页*/}
                        {/*{pathname === '/recommend'? <ContentMainHome name='推荐'/> : null}*/}
                        {/*{pathname === '/attention' ? <ContentMainHome name='关注'/> : null}*/}
                        {/*{pathname === '/hot' ? <ContentMainHome name='热榜'/> : null}*/}
                    </div>
                </div>
            </div>
        )
    }
}