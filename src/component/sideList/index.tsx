import React from 'react';

import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { History } from 'history';
const { Sider } = Layout;
const { SubMenu } = Menu;
export interface SlideMenusProps {
  list: Array<any>;
  history: History<any>;
}
export interface SlideMenusState {
  activeMenus: string;
}
export default class SlideMenus extends React.Component<SlideMenusProps, SlideMenusState> {
  constructor(props: SlideMenusProps) {
    super(props);
    this.state = { activeMenus: this.props.history.location.pathname };
  }
  componentWillReceiveProps(props: SlideMenusProps) { // 父组件重传props时就会调用这个方法
    this.setState({ activeMenus: this.props.history.location.pathname });
  }
  render() {
    return (
      <Sider style={{ background: 'transparent' }}>
        <Menu
          mode="inline"
          selectedKeys={[this.state.activeMenus]}
          style={{ height: '100%', borderRight: 0 }}
        >
          {this.props.list.map((item: any, index: number) => {
            if (item.items && item.items.length) {
              return (
                <SubMenu key={item.path}
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
              )
            } else {
              return (
                <Menu.Item key={item.path}>
                  <span>
                    <Icon type={item.icon} />
                    <Link to={item.path}>{item.name}</Link>
                  </span>
                </Menu.Item>
              )
            }
          }
          )}
        </Menu>
      </Sider>
    );
  }
}
