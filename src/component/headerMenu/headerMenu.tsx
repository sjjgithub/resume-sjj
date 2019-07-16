import React from 'react';
import mockjs from 'mockjs';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
export default class HerderMenu extends React.Component {
  private menuItems = mockjs.mock({ 'data|2': [{ 'name|+1': ['home', 'detail'], 'path|+1': ['/', '/detail/22'] }] }).data;;
  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        {this.menuItems.map((item: any, index: number) =>
          <Menu.Item key={index + 1}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        )}
      </Menu>
    );
  }
}
