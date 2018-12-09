import React, { Component } from 'react';
import './assert/css/app.scss';
import Header from "./container/Header";
import Content from "./container/Content";

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 入口
 */
export default class App extends Component {

    render() {
        return (
            <div className="app">
                <Header />
                <Content />
            </div>
        );
    }
}
