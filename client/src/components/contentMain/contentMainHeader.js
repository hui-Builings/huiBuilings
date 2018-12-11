import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import contentMainHot from "./hot/contentMainHot";
import ContentMainAttention from "./attention/contentMainAttention";
import contentMainRecommend from "./recommend/contentMainRecommend";

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 顶部主体 -> 功能：提问，回答，写文章，写想法
 */
@withRouter
class ContentMainHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu:[
                {path:'/recommend', name:'推荐'},
                {path:'/attention',  name:'关注'},
                {path:'/hot', name:'热榜'},
            ],
            activeMenu: '推荐'
        }
    }

    componentDidMount(){
        const { url } = this.props.match;
        const activeMenu = this.state.menu.filter(item => item.path == url)[0].name;
        this.setState({activeMenu});
    }

    checkRouter = (item)=>{
        this.setState({activeMenu:item.name},()=>{
            this.props.history.push(item.path);
        });
    }

    render(){
        const { menu, activeMenu }  = this.state;
        const menuList = (
             <Menu>
                 {menu.filter(item => item.name !== activeMenu).map(itemT =>{
                     return <Menu.Item key={itemT.path} onClick={()=>this.checkRouter(itemT)}><Icon type="tag" /><span>{itemT.name}</span></Menu.Item>
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
export default ContentMainHeader;