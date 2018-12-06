import React, { Component } from 'react';
<<<<<<< HEAD
import './App.scss';
import Header from "./container/Header";
import Content from "./container/Content";

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <Header />
          <Content />
=======

import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content/Content";

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <Content />
          <Footer />
>>>>>>> a2a9dbd9100a647bb18e5525b752b0419416cb66
      </div>
    );
  }
}
<<<<<<< HEAD
=======

export default App;
>>>>>>> a2a9dbd9100a647bb18e5525b752b0419416cb66
