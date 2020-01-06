import React, { Component } from 'react';
import Router from 'react-router'
import Button from 'antd/lib/button';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
    }

    componentDidMount () {

    }

    onClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render () {
        return (
            <div>
                <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>Switch</Button>
                </p>
                <p>我是home</p>
            </div>
        )
    }
}

export default Home
