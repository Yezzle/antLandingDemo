import React, { Component } from 'react'
import { Banner } from '@/components/banner'
import TextPlay from '@/components/textPlay'
import SideNav from '@/components/sideNav'
import { throttle } from '@/util/utils'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            isShowTab: false,
            isShowNav: false,
            isEnd: false,
            type: 'dark',
            chooseIdx: 0,
            isShowBr: false,
            isShowBl: false,
            isShowC: false
        }
        this.bannerContentB = React.createRef()
        this.bannerContentC = React.createRef()
        this.throttleScrollNav = throttle(this.handleScrollNav)
        this.throttleScroll = throttle(this.handleScroll, 500)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.throttleScrollNav, true)
        window.addEventListener('scroll', this.throttleScroll, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.throttleScrollNav, true)
        window.removeEventListener('scroll', this.throttleScroll, true)
    }

    handleScrollNav = () => {
        console.dir(document.body.scrollTop)
        console.dir(this.bannerContentB.current)
        const bTop = this.bannerContentB.current.getBoundingClientRect().top
        const cTop = this.bannerContentC.current.getBoundingClientRect().top
        if (bTop > 0) {
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
                isShowTab: true
            })
        }
        if (document.body.scrollTop > 600 && !isEnd) {
            this.setState({
                isShowBr: true
            })
        }
        if (document.body.scrollTop > 800 && !isEnd) {
            this.setState({
                isShowBl: true
            })
        }
        if (document.body.scrollTop > 1400 && !isEnd) {
            this.setState({
                isShowC: true,
                isEnd: true
            })
        }  
    }

    changeAnchor = (index) => {
        console.log(index)
        const element = index == 0 ? this.bannerContentB.current : this.bannerContentC.current
        element.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth' })
    } 

    render() {
        const { isShowTab, isShowNav, isShowBl, isShowBr, isShowC, type, chooseIdx } = this.state
        return (
            <div className="home">
                <SideNav 
                    isShow={isShowNav}
                    type={type}
                    navList={['公司介绍', '旗下礼盒品牌']}
                    changeAnchor={this.changeAnchor}
                    chooseIdx={chooseIdx}
                />
                <Banner
                    bannerClass={"home-banner-a"}
                    style={{}}
                    content={
                        <div className="banner-title"
                            style={{
                                paddingTop: '3.75rem',
                            }}
                        >
                            <div className="p"><TextPlay isShow>每一罐都是充氮保鲜</TextPlay></div>
                            <div className="p"><TextPlay isShow>小罐保鲜，茶叶常温保鲜的重大突破</TextPlay></div>
                            <span><TextPlay isShow>——柏商（湖北）商业管理有限公司</TextPlay></span>
                        </div>
                        }
                />
                <div className="home-tab">
                    <div>
                        <div className="tab-text">
                            <TextPlay
                                isShow={isShowTab}
                                type="bottom"
                                mode="sync"
                            >
                                开启，全新饮茶体验                      
                            </TextPlay>
                            <TextPlay
                                isShow={isShowTab}
                                type="bottom"
                                mode="sync"
                                delay={200}
                            >
                                懂茶更懂你
                            </TextPlay>
                        </div> 
                    </div>
                    <div>
                        <div className="tab-text">
                            <TextPlay
                                isShow={isShowTab}
                                type="bottom"
                                mode="sync"
                                delay={500}
                            >
                                饮茶体验的一次全新改变
                            </TextPlay>
                            <TextPlay
                                isShow={isShowTab}
                                type="bottom"
                                mode="sync"
                                delay={700}
                            >
                                化繁极简入手即时高手
                            </TextPlay>
                        </div> 
                    </div>
                    <div>
                        <div className="tab-text">
                            <TextPlay
                                isShow={isShowTab}
                                type="bottom"
                                mode="sync"
                                delay={1000}
                            >
                                每一罐都是原产地特级茶青
                            </TextPlay>
                            <TextPlay
                                isShow={isShowTab}
                                type="bottom"
                                mode="sync"
                                delay={1200}
                            >
                                缔造现代用茶
                            </TextPlay>
                        </div> 
                    </div>
                </div>
                <Banner
                    myRef={this.bannerContentB}
                    bannerClass={"home-banner-b"}
                    style={{}}
                    content={
                        <div className="banner-content-b">
                            <div>
                                <p><img className="transform" src={require('../../assets/images/home/sticker_0.png')} alt=""/></p>
                                <p></p>
                                <ul>
                                    <li><TextPlay isShow={isShowBl}>我们始终以“服务客户，成就自我”为宗旨</TextPlay></li>
                                    <li><TextPlay isShow={isShowBl} delay={200}>“为客户提供更专业更系统高效的专业值息化一站式服务”为使命</TextPlay></li>
                                    <li><TextPlay isShow={isShowBl} delay={400}>“诚信共赢，专业服务”的企业核心价值观</TextPlay></li>
                                </ul>
                            </div>
                            <div>
                                <div className="right-banner-b"><TextPlay isShow={isShowBr}>原产地特级茶青</TextPlay></div>
                                <div className="right-banner-b"><TextPlay isShow={isShowBr}>柏商（湖北）商业管理</TextPlay></div>
                                <div className="right-banner-b"><TextPlay isShow={isShowBr} mode="sync">柏商为互联网行业及新零售业的商业，品牌运营，企业架构管理，广告策划品牌推广及产品运营提供更立体的全方位服务。致力于成为全国新零售行业更专业可依赖的多元化运营服务提供商．</TextPlay></div>
                                <div className="right-banner-b"><img className="transform" src={require('../../assets/images/home/sticker_1.png')} alt=""/></div>
                            </div>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentC}
                    bannerClass={"home-banner-c"}
                    style={{}}
                    content={
                        <div className="banner-content-c">
                            <p><img src={require('../../assets/images/home/sticker_2.png')} alt=""/></p>
                            <ul>
                                <li>
                                    <div className="bottom-banner-c"><TextPlay isShow={isShowC}>什么是手信</TextPlay></div>
                                    <div className="bottom-banner-c"><TextPlay isShow={isShowC} delay={100}>手信．柏商商业旗下礼品品牌，专注于高端礼品定制领域。手信，是中国古代礼品称呼，初为”贽’，即礼物。</TextPlay></div>
                                </li>
                                <li>
                                    <div className="bottom-banner-c"><TextPlay isShow={isShowC} delay={200}>古代记载</TextPlay></div>
                                    <div className="bottom-banner-c"><TextPlay isShow={isShowC} delay={300}>《 左传 · 庄公二十四年 》 记载：’男贽．大者玉帛，小者禽鸟．以章物也。女贽．不过臻粟枣以告虞也。</TextPlay></div>
                                </li>
                                <li>
                                    <div className="bottom-banner-c"><TextPlay isShow={isShowC} delay={400}>手信分为什么</TextPlay></div>
                                    <div className="bottom-banner-c"><TextPlay isShow={isShowC} delay={500}>手信 · 茶礼，联合国内多家顶尖设计院校及知名国瓷生产企业．精选祁门红茶、武夷岩茶、政和白茶、普洱熟茶．与景德镇影青瓷组合成礼。</TextPlay></div>
                                </li>
                            </ul>
                        </div>
                    }
                />
            </div>
        )
    }
}

export default Home
