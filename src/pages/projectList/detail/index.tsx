import React from 'react';
import { RouteComponentProps } from 'react-router';
export default class Home extends React.Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
        console.log(props);
    }
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
