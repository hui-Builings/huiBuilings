import React, { Component } from 'react';
import ContentMain from '../components/contentBar/contentMain'
import ContentRightBar from '../components/contentBar/contentRightBar'

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
            <div className="app-content">
                <div>
                    <ContentMain />
                    <ContentRightBar />
                </div>
            </div>
        )
    }
}