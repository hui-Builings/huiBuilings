import React, { Component } from 'react';
import ContentMain from '../components/content/index'

export default class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu:false
        }
    }

  render(){
    return (
      <div className="app-content">
          <ContentMain />
      </div>
    )
  }
}