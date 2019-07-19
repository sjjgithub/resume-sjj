import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { History } from 'history';
export interface HerderMenuProps {
  list: Array<any>;
  history: History<any>;
}
export interface HerderMenuState {
  active: string;
}
export default class HerderMenu extends React.Component<HerderMenuProps, HerderMenuState> {
  constructor(props: HerderMenuProps) {
    super(props);
    let findActive = this.props.list.find((item: any) => this.props.history.location.pathname.indexOf(item.path) > -1)
    this.state = { active: (findActive ? findActive.path : '') };
  }
  componentWillReceiveProps(props: HerderMenuProps) { // 父组件重传props时就会调用这个方法
    let findActive = props.list.find((item: any) => props.history.location.pathname.indexOf(item.path) > -1)
    this.setState({ active: (findActive ? findActive.path : '') });
  }
  render() {
    return (
      <Menu
        className="HerderMenu"
        theme="dark"
        mode="horizontal"
        selectedKeys={[this.state ? this.state.active : '']}
        style={{ lineHeight: '64px' }}
      >
        {this.props.list.map((item: any, index: number) =>
          <Menu.Item key={item.path}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </Menu.Item>
        )}
      </Menu>
    );
  }
}
