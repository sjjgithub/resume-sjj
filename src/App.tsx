import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import routers from './router/router';
import NotFound from './pages/404/notFound';
import { Layout, Breadcrumb } from 'antd';
import SlideMenus from './component/sideList/slideList';
import HerderMenu from './component/headerMenu/headerMenu';

const { Header, Content, Sider } = Layout;
function getConfirmation(message: any, callback: Function) {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
const supportsHistory = 'pushState' in window.history;
const App: React.FC = () => {
  return (
    <Router 
          basename=""
          getUserConfirmation={getConfirmation}
          forceRefresh={!supportsHistory}
          keyLength={12}
    >
      <div className="App">
        <Layout>
          <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" ></div>
            <HerderMenu/>
          </Header>
          <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', top: '64px', height: 'calc(100% - 100px)', overflow: 'auto' }}>
            <Sider>
              <SlideMenus/>
            </Sider> 
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >

                <nav className="navbar navbar-inverse" >
                  <div className="container-fluid">
                    <ul className="nav navbar-nav" >
                      <li>
                        <Link to="/">首页</Link>
                      </li>
                      <li>
                        <Link to="/detail/66">战队介绍</Link>
                      </li>
                      <li>
                        <Link to="/video">视频</Link>
                      </li>
                      <li>
                        <Link to="/login">登录</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <Switch>
                  {
                    routers.map((route, index) => {
                      return (
                        <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.component} />
                      )
                    })
                  }
                  <Route component={NotFound} />
                </Switch>

              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default hot(module)(App)
