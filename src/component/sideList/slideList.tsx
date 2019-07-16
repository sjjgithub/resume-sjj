import React from 'react';
import mockjs from 'mockjs';
import {  Menu, Icon } from 'antd';
const { SubMenu } = Menu;
export default class SlideMenus extends React.Component {
    private menuItems = mockjs.mock({ 'data|3-5': [{ 'icon|+1': ['user', 'laptop', 'notification'], 'items|1-2': [1, 2, 3] }] }).data;
    render() {
        return (
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {this.menuItems.map((item: any, index: number) =>
                <SubMenu key={'sub' + (index + 1)}
                  title={<span>
                    <Icon type={item.icon} />
                    subnav {index + 1}
                  </span>}>
                  {
                    item.items.map((subItem: any, ind: number) =>
                      <Menu.Item key={ind + 1}>option{ind + 1}</Menu.Item>
                    )
                  }
                </SubMenu>
              )}
            </Menu>
        );
    }
}
