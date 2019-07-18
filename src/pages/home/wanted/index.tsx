import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button } from 'antd';
export default class WantedInfo extends React.Component<RouteComponentProps> {
    clickHandle = ()=>{
        this.props.history.push({
            pathname: '/detail/22',
            state: {
                id: 3
            }
        })
    }
    render() {
        return (
            <div>
                <Button type='primary'>wantedInfo</Button>
            </div>
        )
    }
}
