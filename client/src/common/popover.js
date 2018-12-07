import React, { Component } from 'react';

//气泡卡片
export default class Popver extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render(){
        let { className,titles,visibile } = this.props;
        let classNames = className ? `app-popover ${className} app-popover-hidden` : 'app-popover app-popover-hidden';
        if(visibile){
            classNames = className ? `app-popover ${className}` : 'app-popover';
        }
        return (
            <div className={classNames}>
                <div className="app-popover-content">
                    <div className="app-popover-arrow"></div>
                    <div className="app-popover-inner"><div>
                        <div className="app-popover-title" style={{display:titles ? 'block':'none'}}>{titles}</div>
                        <div className="app-popover-inner-content">
                            {this.props.children}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
  }
}