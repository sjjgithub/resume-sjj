import React from 'react';
import { RouteComponentProps } from 'react-router';
export default class Projects extends React.Component<RouteComponentProps> {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <a href='/'>去home</a>
            </div>
        )
    }
}
