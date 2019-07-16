import React from 'react';
import mockjs from 'mockjs';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
export default class SlideMenus extends React.Component {
  private menuItems = mockjs.mock({ 'data|5': [{ 'name|+1': ['基本信息', '求职意向', '工作经验', '教育经历', '自我评价'], 'icon|+1': ['user', 'laptop', 'notification'] }] }).data;
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
              {item.name}
            </span>}>
            {
              item.items && item.items.length && item.items.map((subItem: any, ind: number) =>
                <Menu.Item key={ind + 1}>option{ind + 1}</Menu.Item>
              )
            }
          </SubMenu>
        )}
      </Menu>
    );
  }
}
