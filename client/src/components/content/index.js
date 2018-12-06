import React, { Component } from 'react';
import ContentMain from './contentMain'
import ContentRightBar from './contentRightBar'

export default class Index extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
            menu:false
        }
    }

  render(){
    return (
      <div>
          <ContentMain />
          <ContentRightBar />
      </div>
    )
  }
}