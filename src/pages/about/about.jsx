import React, { Component } from 'react'
import Button from 'antd/lib/button'
import TextPlay from '@/components/textPlay'
import { Banner } from '../../components/banner'

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
            <div className="about">
                 <Banner
                    bannerClass={"banner_about"}
                    style={{}}
                    content={
                        <>  
                            <span><TextPlay>联系我们</TextPlay></span>
                            <p><TextPlay>柏商商业</TextPlay></p>
                            <p><TextPlay>认识你很高兴，欢迎联系！</TextPlay></p>
                            <span><TextPlay>——柏商（湖北）商业管理有限公司</TextPlay></span>
                        </>}
                />
                {/* <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>About</Button>
                </p> */}
                
            </div>
        )
    }
}

export default About
