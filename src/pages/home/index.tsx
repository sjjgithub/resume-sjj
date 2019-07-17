import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import mockjs from 'mockjs';
import SlideMenus from '../../component/sideList';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import BaseInfo from './base';
import { Layout } from 'antd';
import RoutesEach from '../../component/routesEach';
const { Content } = Layout;
const numbers = mockjs.mock({ 'data|5': [{ 'name|+1': ['基本信息', '求职意向', '工作经验', '教育经历', '自我评价'], 'icon|+1': ['user', 'laptop', 'notification'], 'path|+1': ['/home/baseInfo', '/wantedInfo', '/workInfo', '/education', '/evaluation'], 'items|+1': [['基本资料', '目前年收入'], [], [], [], []] }] }).data;
export default class Home extends React.Component<RouteComponentProps> {
    private menuItems: Array<any> = [];
    constructor(props: RouteComponentProps) {
        super(props);
        console.log(props);
    }
    clickHandle = () => {
        this.props.history.push({
            pathname: '/detail/22',
            state: {
                id: 3
            }
        })
    }
    render() {
        return (
            <Route>
                <SlideMenus list={numbers}/>
                <Content>
                    {/* <RoutesEach/> */}
                    <Switch>
                        <Route exact path="/home" render={() =>
                        <Redirect to={'/home/baseInfo'}></Redirect>}></Route>
                        <Route path="/home/baseInfo" component={BaseInfo}></Route>
                    </Switch>
                </Content>
            </Route>
        )
    }
}
