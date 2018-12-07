import React, { Component } from 'react';
import ContentMain from '../components/contentBar/contentMain'
import ContentRightBar from '../components/contentBar/contentRightBar'

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 主体部分：列表 + 菜单
 */
export default class Content extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
            menu:false
        }
    }

    render(){
        return (
            <div className="app-content">
                <div>
                    <ContentMain />
                    <ContentRightBar />
                </div>
            </div>
        )
    }
}