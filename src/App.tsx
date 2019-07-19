import React from 'react';
import './App.less';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import routers from '../src/router';
import HerderMenu from './component/headerMenu';
import { Layout, Breadcrumb, Avatar } from 'antd';
import RoutesEach from './component/routesEach';
import mockjs from 'mockjs';
const { Header, Content } = Layout;
function getConfirmation(message: any, callback: Function) {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
const supportsHistory = 'pushState' in window.history;
const App: React.FC = () => {
  const menuItems = mockjs.mock({ 'data|2': [{ 'name|+1': ['我的主页', '我的项目经验'], 'path|+1': ['/home', '/projects'] }] }).data;;
  return (
    <Router
      basename=""
      getUserConfirmation={getConfirmation}
      forceRefresh={!supportsHistory}
      keyLength={12}
    >
      <div className="App" >
        <Layout>
          <Route key="global" render={props =>
            <div>
              <Header className="header dis-flex flex-vc">
                <div className="App-logo pointer"><Link to="/">sjj</Link></div>
                <HerderMenu history={props.history} list={menuItems} />
                <Avatar size="large" icon="user" />
              </Header>
              <Content style={{ padding: '0 50px', position: 'fixed', zIndex: 1, width: '100%', top: '64px', height: 'calc(100% - 100px)', overflow: 'auto' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  {
                    props.history.location.pathname.split('/').map((path, Index) =>
                      <Breadcrumb.Item key={Index}><Link to={props.history.location.pathname.split('/').slice(0, Index + 1).join('/')}>{path}</Link></Breadcrumb.Item>
                    )
                  }
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff', minHeight: 'calc(100% - 53px)' }}>
                  <RoutesEach routersConfig={routers} />
                </Layout>
              </Content>
            </div>
          }>
          </Route>
        </Layout>
      </div>
    </Router>
  );
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App);
