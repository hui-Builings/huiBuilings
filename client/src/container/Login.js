import React, { Component } from 'react';
import { Icon,Input,Button } from 'antd'

/**
 * @author hui
 * @date 2018/12/8
 * @Description: 登录
 */
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
          return (
              <div className="app-card app-login">
                  <h2>Builings</h2>
                  <h4>发现不一样的自己，寻找另一面！！！</h4>
                  <Icon type='close' className='app-login-close' onClick={this.props.openMask}/>
                  <div className='app-login-input'>
                      <Input type="text" placeholder='请输入用户名'/>
                      <Input type="text" placeholder='请输入密码'/>
                      <div className='app-login-forget'>
                          <a>忘记密码？</a>
                      </div>
                      <Button type='primary'>登录</Button>
                  </div>
                  <div className="app-login-check">
                        <span>还未有帐号？<span>注册</span></span>

                  </div>
              </div>
          )
    }
}