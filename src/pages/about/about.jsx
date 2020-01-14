import React, { Component } from 'react'
import TextPlay from '@/components/textPlay'
import { Banner } from '@/components/banner'
import SideNav from '@/components/sideNav'
import { throttle } from '@/util/utils'

class About extends Component {
    constructor() {
        super()
        this.state = {
            isShowNav: false,
            isEnd: false,
            type: 'dark',
            chooseIdx: 0,
            isShowB: false,
            isShowC: false
        }
        this.bannerContentB = React.createRef()
        this.bannerContentC = React.createRef()
        this.throttleScrollNav = throttle(this.handleScrollNav)
        this.throttleScroll = throttle(this.handleScroll, 500)
    }

    componentDidMount () {
        window.addEventListener('scroll', this.throttleScrollNav, true)
        window.addEventListener('scroll', this.throttleScroll, true)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.throttleScrollNav, true)
        window.removeEventListener('scroll', this.throttleScroll, true)
    }

    handleScrollNav = () => {
        console.dir(document.body.scrollTop)
        console.dir(this.bannerContentB.current)
        const bTop = this.bannerContentB.current.getBoundingClientRect().top
        const cTop = this.bannerContentC.current.getBoundingClientRect().top
        if (bTop > 10) {
            this.setState({
                chooseIdx: 0,
                isShowNav: false
            })
            return
        }

        if (bTop < 10 && bTop > -534) {
            this.setState({
                isShowNav: true,
                type: 'dark',
                chooseIdx: 0
            })
            return
        }
        if (cTop < 10 && cTop > -534) {
            this.setState({
                isShowNav: true,
                type: 'light',
                chooseIdx: 1
            })
            return
        }
        if (cTop > 0 || bTop < -534 || cTop < -534) {
            this.setState({
                isShowNav: false
            })
        }
    }

    handleScroll = () => {
        const { isEnd } = this.state
        if (isEnd) return
        // if (document.body.scrollTop > 600 && !isEnd) {
        //     this.setState({
        //         isShowB: true
        //     })
        // }
        if (document.body.scrollTop > 1500 && !isEnd) {
            this.setState({
                isShowC: true,
                isEnd: true
            })
        }
    }

    changeAnchor = (index) => {
        console.log(index)
        const element = index == 0 ? this.bannerContentB.current : this.bannerContentC.current
        element.scrollIntoView({ block: "start", inline: "nearest", behavior: 'smooth' })
    } 

    render() {
        const { isShowNav, isShowB, isShowC, type, chooseIdx } = this.state
        return (
            <div className="about">
                <SideNav
                    isShow={isShowNav}
                    type={type}
                    navList={['我们是谁', '办公城市']}
                    changeAnchor={this.changeAnchor}
                    chooseIdx={chooseIdx}
                />
                 <Banner
                    bannerClass={"about-banner-a"}
                    style={{}}
                    content={
                        <div className="banner-title"
                            style={{
                                paddingTop: '3.2rem',
                            }}
                        >
                            <span><TextPlay isShow>关于柏商</TextPlay></span>
                            <div className="p"><TextPlay isShow>致力于成为全国新零售行业</TextPlay></div>
                            <div className="p"><TextPlay isShow>更专业可依赖的多元化运营服务提供商。</TextPlay></div>
                            <span><TextPlay isShow>——柏商（湖北）商业管理有限公司</TextPlay></span>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentB} 
                    bannerClass={"about-banner-b"}
                    style={{}}
                    content={
                        <div className="banner-content-b">
                            <img src={require('../../assets/images/about/sticker_0.png')} alt=""/>
                            <img src={require('../../assets/images/about/sticker_1.png')} alt="" />
                            <div className="b-title"><TextPlay isShow>商业管理、品牌运营、企业架构管理、广告营销策划品牌推广、产品运营</TextPlay></div>
                            <div className="b-title-s"><TextPlay isShow>互联网行业及新零售业的全方位服务</TextPlay></div>
                            <ul>
                                <img src={require('../../assets/images/about/sticker_2.png')} alt="" />
                                <li>
                                    <div></div>
                                    <TextPlay isShow>我们的价值</TextPlay>
                                </li>
                                <li>
                                    <div><TextPlay isShow>01.柏商服务宗旨</TextPlay></div>
                                    <div><TextPlay isShow>我们始终以“服务客户，成就自我”为宗旨</TextPlay></div>
                                </li>
                                <li>
                                    <div><TextPlay isShow>02.柏商服务使命</TextPlay></div>
                                    <div><TextPlay isShow>以“为客户提供更专业更系统高效的专业信息化一站式服务”为使命</TextPlay></div>
                                </li>
                                <li>
                                    <div><TextPlay isShow>03.柏商企业核心价值观</TextPlay></div>
                                    <div><TextPlay isShow>服务客户，努力为其发掘企业的更多潜在价值，我们在“诚信共赢，专业服务”的企业核心价值观引导下，致力于成为全国新零售行业更专业可依赖的多元化运营服务提供商</TextPlay></div>
                                </li>
                            </ul>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentC}
                    bannerClass={"about-banner-c"}
                    style={{}}
                    content={
                        <div className="banner-content-c">
                            <div className="c-title"><TextPlay isShow>北京（总部）</TextPlay></div>
                            <p>
                                <img src={require('../../assets/images/about/sticker_3.png')} alt="" />
                            </p>
                            <ul className="clearfix">
                                <li>
                                    <div><TextPlay isShow={isShowC}>地址</TextPlay></div>
                                    <div><TextPlay isShow={isShowC}>北京市朝阳区光华路199号  1205</TextPlay></div>
                                </li>
                                <li>
                                    <div><TextPlay isShow={isShowC}>电话</TextPlay></div>
                                    <div><TextPlay isShow={isShowC}>0371-6666-8888</TextPlay></div>
                                </li>
                            </ul>
                        </div>
                    }
                />
            </div>
        )
    }
}

export default About
