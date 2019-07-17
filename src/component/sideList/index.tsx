import React from 'react';

import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
export class SlideMenusClass {
  list: Array<any> = [];
}
export default class SlideMenus extends React.Component<SlideMenusClass, any> {
  private menuItems: Array<any> = [];
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Sider style={{ background: 'transparent' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {this.props.list.map((item: any, index: number) =>
            <SubMenu key={'sub' + (index + 1)}
              title={<span>
                <Icon type={item.icon} />
                <Link to={item.path}>{item.name}</Link>
              </span>}>
              {
                item.items && item.items.length && item.items.map((subItem: any, ind: number) =>
                  <Menu.Item key={ind + 1}>{subItem}</Menu.Item>
                )
              }
            </SubMenu>
          )}
        </Menu>
      </Sider>
    );
  }
}
