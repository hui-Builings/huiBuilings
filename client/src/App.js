import React, { Component } from 'react';
import './assert/css/app.scss';
import Header from "./container/Header";
import Content from "./container/Content";

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
