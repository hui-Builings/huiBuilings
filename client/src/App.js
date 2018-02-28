import React, { Component } from 'react';

import './App.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";

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
