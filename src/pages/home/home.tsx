import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
export default class Home extends React.Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
        console.log(props);
    }
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
                <Link to="/detail/66"><Button type='primary'>商品2</Button></Link>
                <a href='/detail/44'>商品2</a>
            </div>
        )
    }
}
