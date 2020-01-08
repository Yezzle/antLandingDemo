import React, { Component } from 'react';
import { Banner } from '@/components/banner';

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
                <Banner
                    bannerClass={"home-banner"}
                    style={{}}
                    content={
                        <>
                            <div className="p">每一罐都是充氮保鲜</div>
                            <div className="p">小罐保鲜，茶叶常温保鲜的重大突破</div>
                            <span>——柏商（湖北）商业管理有限公司</span>
                        </>}
                />
            </div>
        )
    }
}

export default Home
