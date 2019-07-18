import React from 'react';
import { RouteComponentProps } from 'react-router';
import mockjs from 'mockjs';
import SlideMenus from '../../component/sideList';
import {
    Route
} from 'react-router-dom';
import { Layout } from 'antd';
import RoutesEach from '../../component/routesEach';
const { Content } = Layout;
const numbers = mockjs.mock( { 'data|5': [{ 'name|+1': ['基本信息', '求职意向', '工作经验', '教育经历', '自我评价'], 'icon|+1': ['user', 'laptop', 'notification'], 'path|+1': ['/home/baseInfo', '/home/wantedInfo', '/home/workInfo', '/home/educationInfo', '/home/evaluationInfo'] }] }).data;
interface IProps {
    childrenRoutes: Array<any>
}

type HomeProps = IProps & RouteComponentProps;
export default class Home extends React.Component<HomeProps> {
    clickHandle = () => {
        this.props.history.push({
            pathname: '/detail/22',
            state: {
                id: 3
            }
        })
    }
    render() {
        if (this.props.childrenRoutes && this.props.childrenRoutes.length) {
            return (
                <Route>
                    <SlideMenus list={numbers} history={this.props.history} />
                    <Content style={{ padding: '0 10px' }}>
                        <RoutesEach routersConfig={this.props.childrenRoutes} {...this.props} />
                    </Content>
                </Route>
            )
        } else {
            return <Route>
                <SlideMenus list={numbers} history={this.props.history} />
                <Content>

                </Content>
            </Route>
        }
    }
}
