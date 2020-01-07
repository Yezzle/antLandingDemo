import React, { Component } from 'react';
import Button from 'antd/lib/button';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
    }

    componentDidMount() {

    }

    onClick = () => {
        this.props.router.push('/about')
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div className="home">
                <div className="first-banner">
                    
                </div>  
            </div>
        )
    }
}

export default Home
