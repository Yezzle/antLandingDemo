import React, { Component } from 'react';
import Button from 'antd/lib/button';

class About extends Component {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
    }

    componentDidMount() {

    }

    onClick = () => {
        this.props.router.push('/')
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div className="queue-demo">
                <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>About</Button>
                </p>
                <p>我是About</p>
            </div>
        )
    }
}

export default About
