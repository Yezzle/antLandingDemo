import React, { Component } from 'react';

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
                    <div 
                        className="banner-content"
                    >
                        <div 
                            className="banner-title"
                            style={{
                                paddingTop: '3.75rem',
                            }}
                        >
                            <p>每一罐都是充氮保鲜</p>
                            <p>小罐保鲜，茶叶常温保鲜的重大突破</p>
                            <span>——柏商（湖北）商业管理有限公司</span>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Home
