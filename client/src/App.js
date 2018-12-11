import React, { Component } from 'react';
import './assert/css/app.scss';
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
            // menu:false,
        }
    }

    render() {
        return (
            <div className="app">
                <ContentRouterSwitch />
            </div>
        );
    }
}
