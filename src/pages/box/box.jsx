import React, { Component } from 'react'
import TextPlay from '@/components/textPlay'
import { Banner } from '@/components/banner'
import SideNav from '@/components/sideNav'
import { throttle } from '@/util/utils'

class Box extends Component {
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
        if (document.body.scrollTop > 150 && !isEnd) {
            this.setState({
                isShowB: true
            })
        }
        if (document.body.scrollTop > 1200 && !isEnd) {
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

    render () {
        const { isShowNav, isShowB, isShowC, type, chooseIdx } = this.state
        return (
            <div className="box">
                <SideNav
                    isShow={isShowNav}
                    type={type}
                    navList={['什么是礼盒手信', '礼盒手信']}
                    changeAnchor={this.changeAnchor}
                    chooseIdx={chooseIdx}
                />
                <Banner
                    bannerClass={"box-banner-a"}
                    style={{}}
                    content={
                        <div className="banner-title"
                            style={{
                                paddingTop: '3.2rem',
                            }}
                        >
                            <span><TextPlay isShow>礼盒手信</TextPlay></span>
                            <div className="p"><TextPlay isShow>手信·柏商商业旗下礼品品牌</TextPlay></div>
                            <div className="p"><TextPlay isShow>专注于高端 礼品定制领域。</TextPlay></div>
                            <span><TextPlay isShow>——柏商（湖北）商业管理有限公司</TextPlay></span>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentB}
                    bannerClass={"box-banner-b"}
                    style={{}}
                    content={
                        <div className="box-banner-content-b">
                            <img src={require('../../assets/images/box/sticker_0.png')} alt="" />
                            <div className="b-title"><TextPlay isShow={isShowB}>旗下礼盒品牌手信的介绍</TextPlay></div>
                            <div className="b-title-s"><TextPlay isShow={isShowB} interval={15}>手信，是中国古代礼品称呼，初为‘贽’，即礼物。《 左传 · 庄公二十四年 》 记载：“男贽．大 者玉帛，小者禽鸟．以章物也。女贽,不过臻粟枣以告虞也”。手信 · 茶礼，联合国内多家顶尖设计院校及知名国瓷生产企业．精选祁门红茶、武夷岩茶、政和白茶、普洱熟茶．与景德镇影青瓷组合。</TextPlay></div>
                            <div className="b-title"><TextPlay isShow={isShowB}>手信．柏商商业旗下礼品品牌，专注于高端礼品定制领域。</TextPlay></div>
                            <div className="b-title-s1"><TextPlay isShow={isShowB}>BOX LETTER</TextPlay></div>
                            <div className="b-title-s2"><TextPlay isShow={isShowB}>柏商礼盒手信</TextPlay></div>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentC}
                    bannerClass={"box-banner-c"}
                    style={{}}
                    content={
                        <div className="box-banner-content-c">
                            <p><img src={require('../../assets/images/box/sticker_1.png')} alt="" /></p>
                            <p style={{ marginLeft: '.24rem' }}><img src={require('../../assets/images/box/sticker_2.png')} alt="" /></p>
                            <ul className="clearfix">   
                                <li>
                                    <div><TextPlay isShow={isShowC}>礼盒手信</TextPlay></div>
                                    <div><TextPlay isShow={isShowC}>礼盒手信礼盒手信礼盒手信</TextPlay></div>
                                </li>
                                <li>
                                    <div><TextPlay isShow={isShowC}>礼盒手信</TextPlay></div>
                                    <div><TextPlay isShow={isShowC}>礼盒手信礼盒手信礼盒手信</TextPlay></div>
                                </li>
                            </ul>
                            <p style={{ marginTop: '.6rem' }}><img src={require('../../assets/images/box/sticker_3.png')} alt="" /></p>
                            <p style={{ marginLeft: '.24rem' }}><img src={require('../../assets/images/box/sticker_4.png')} alt="" /></p>
                            <ul className="clearfix">
                                <li>
                                    <div><TextPlay isShow={isShowC}>礼盒手信</TextPlay></div>
                                    <div><TextPlay isShow={isShowC}>礼盒手信礼盒手信礼盒手信</TextPlay></div>
                                </li>
                                <li>
                                    <div><TextPlay isShow={isShowC}>礼盒手信</TextPlay></div>
                                    <div><TextPlay isShow={isShowC}>礼盒手信礼盒手信礼盒手信</TextPlay></div>
                                </li>
                            </ul>
                        </div>
                    }
                />
            </div>
        )
    }
}

export default Box
