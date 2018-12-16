import React, { Component } from 'react';
import { Menu,Dropdown,Icon } from 'antd'
import img from '../assert/images/admin.jpg'
import { Link } from 'react-router-dom';
import Login from "./Login";

/**
 * @author hui
 * @date 2018/8/15
 * @Description: 头部
 */
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            mask:false
        }
    }

    //打开遮罩层
    openMask = (val)=>{
        this.setState({
            mask:val
        })
    }

    render(){
          const login = (
              <Menu className='app-header-li'>
                  <Menu.Item>
                      <Link to='/myDetail'><span><Icon type="user" style={{marginRight:10}}/>我的主页</span></Link>
                  </Menu.Item>
                  <Menu.Item>
                      <span onClick={()=>this.openMask(true)}><Icon type="smile"  style={{marginRight:10}}/>登录</span>
                  </Menu.Item>
              </Menu>
          );

          return (
              <div>
                  {/*头部*/}
                  <div className="app-header">
                      <div>
                          <div className="app-header-logo">
                              <span>Builings</span>
                          </div>
                          <div className="app-header-li">
                              <Link className="active" to='/recommend'><span>首页</span></Link>
                              <Link to='/hot'><span>发现</span></Link>
                              <Link to='/attention'><span>话题</span></Link>
                          </div>
                          <div className="app-header-search">
                              <div className="app-input-search">
                                  <input type="text" className="app-input ib"  placeholder="被爱情难倒的，请举手"/>
                                  <span>
                              <i className="icon-top-search"></i>
                          </span>
                              </div>
                          </div>
                          <div  className="app-header-r">
                              <div className="app-header-operation">
                          <span>
                              <i className="icon-top-news"></i>
                          </span>
                                  <span>
                              <i className="icon-top-msg"></i>
                          </span>
                              </div>
                              <div className="app-header-admin">
                                  <Dropdown overlay={login}>
                                      <img src={img} alt=""/>
                                  </Dropdown>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/*login*/}
                  {this.state.mask ? <div className='app-mask'>
                      <Login  openMask = {()=>this.openMask(false)}/>
                  </div> : null}


              </div>
          )
      }
}
export default Header;
