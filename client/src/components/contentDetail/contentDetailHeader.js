import React, { Component } from 'react';
import { Tooltip, Button, Icon, Tag } from 'antd';
/**
 * @author hui
 * @date 2018/12/7
 * @Description: 顶部主体 -> 问题简介
 */
export default class ContentDetailHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            tags:[]
        }
    }

  render(){
        const question = <div className="title">
            <h4>如何练习前端技术？</h4>
            <p>书籍方面已经看的很多了，但是缺少实际的经验。请问大家当初是如何练习提高的？</p>
        </div>;

        const tags = <div className="tags">
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
        </div>;
      return (
      <div className="app-content-detail-header">
          <Button type="primary">关注问题</Button>
          <Button type="primary" ghost><Icon type="edit" />写回答</Button>
          <div className="detail-r">
              <span><i className="icon-op-pl"></i>4条评论</span>
              <span><i className="icon-op-fx"></i>分享</span>
              <span><i className="icon-like"></i>收藏</span>
              <span><i className="icon-op-jb"></i>举报</span>
              <span><i className="icon-op-sl"></i></span>
          </div>
          <div className="detail-opear">
              {/*问题*/}
              <Tooltip placement="left" title={question}>
                  <p><span><Icon type="contacts" /></span></p>
              </Tooltip>

              {/*标签*/}
              <Tooltip placement="left" title={tags}>
                <p><span><Icon type="tags" /></span></p>
              </Tooltip>

              {/*关注人数*/}
              <Tooltip placement="left" title={<span>945</span>}>
                <p><span><Icon type="heart" /></span></p>
              </Tooltip>

              {/*浏览人数*/}
              <Tooltip placement="left" title={<span>63,691</span>}>
                <p><span><Icon type="usergroup-add" /></span></p>
              </Tooltip>
          </div>
      </div>
    )
  }
}