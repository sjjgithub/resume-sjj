import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
            <HerderMenu />
          </Header>
          <Content style={{ padding: '0 50px', position: 'fixed', zIndex: 1, width: '100%', top: '64px', height: 'calc(100% - 100px)', overflow: 'auto'  }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff' , minHeight: 'calc(100% - 53px)'}}>
              <Sider>
                <SlideMenus/>
              </Sider> 
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
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
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default hot(module)(App)
