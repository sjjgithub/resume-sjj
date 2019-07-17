import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NotFound from '../../pages/404';
export class RoutesEachClass {
  routersConfig: Array<any> = [];
}
export default class RoutesEach extends React.Component<RoutesEachClass, any> {
  constructor(props: any) {
    super(props);
  }
  render() {

    return (
      <Switch >
        <Route exact path="/" render={() =>
          <Redirect to={this.props.routersConfig[0].path}></Redirect>}>
        </Route>
        {
          this.props.routersConfig.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component} />
            )
          })
        }
        <Route component={NotFound} />
      </Switch >
    );
  }
}
