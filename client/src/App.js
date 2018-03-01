import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default App;
