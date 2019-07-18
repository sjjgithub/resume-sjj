import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NotFound from '../../pages/404';
export class RoutesEachClass {
  routersConfig: Array<any> = [];
}
export default class RoutesEach extends React.Component<RoutesEachClass> {
  render() {
    return (
      <Switch >
        {
          this.props.routersConfig.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                render={props =>
                  <route.component childrenRoutes={route.childrenRoutes} {...props} />} />
            )
          })
        }
        <Redirect exact strict from={this.props.routersConfig[0].path.substring(0, this.props.routersConfig[0].path.lastIndexOf("/")) || '/'} to={this.props.routersConfig[0].path} {...this.props}/>
        <Route component={NotFound} />
      </Switch >
    );
  }
}
