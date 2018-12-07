import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';

/**
 * 2018/8/15 @hui
 * 顶部操作
 */
export default class ContentMainHeader extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
            menu:['关注','推荐','热榜'],
            activeMenu:'推荐'
        }
    }

  render(){
      const { menu, activeMenu }  = this.state;
      const menuList = (
          <Menu>
              {menu.filter(item => item !== activeMenu).map(itemT =>{
                  return <Menu.Item key={itemT} onClick={()=>this.setState({activeMenu:itemT})}><Icon type="tag" /><span>{itemT}</span></Menu.Item>
              })}
          </Menu>
      );

      return (
      <div className="app-content-main-header">
          <div><span><i className="icon-main-top-wen"></i>提问</span></div>
          <div><span><i className="icon-main-top-da"></i>回答</span></div>
          <div><span><i className="icon-main-top-xz"></i>写文章</span></div>
          <div><span><i className="icon-main-top-xf"></i>写想法</span></div>
          <div className="app-content-main-header-cg">
              <Dropdown overlay={menuList}>
                  <span style={{color:'#2395ff'}}>{activeMenu}<i className="icon-menu" style={{color:'#2395ff'}}></i></span>
              </Dropdown>
              {/*<Popover className="item-label-popover app-popover-top">*/}
                  {/*<div className="">*/}
                      {/*<p>huihui</p>*/}
                      {/*<span>热门内容, 来自: </span>*/}
                  {/*</div>*/}
              {/*</Popover>*/}
          </div>
      </div>
    )
  }
}