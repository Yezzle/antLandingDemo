import React, { Component } from 'react'
import TextPlay from '@/components/textPlay'
import { Banner } from '@/components/banner'
import SideNav from '@/components/sideNav'
import { throttle } from '@/util/utils'

class Operation extends Component {
    constructor() {
        super()
        this.state = {
            isShowNav: false,
            isEnd: false,
            type: 'dark',
            chooseIdx: 0,
            isShowB: false,
            isShowCt: false,
            isShowCc: false,
            isShowCb: false,
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

        if (bTop < 10 && bTop > -535) {
            this.setState({
                isShowNav: true,
                type: 'dark',
                chooseIdx: 0
            })
            return
        }
        if (cTop < 10 && cTop > -1335) {
            this.setState({
                isShowNav: true,
                type: 'light',
                chooseIdx: 1
            })
            return
        }
        if (cTop > 0 || bTop < -1335 || cTop < -1335) {
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
        if (document.body.scrollTop > 550 && !isEnd) {
            this.setState({
                isShowCt: true
            })
        }
        if (document.body.scrollTop > 1100 && !isEnd) {
            this.setState({
                isShowCc: true
            })
        }
        if (document.body.scrollTop > 1420 && !isEnd) {
            this.setState({
                isShowCb: true,
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
        const { isShowNav, isShowCt, isShowCc, isShowCb, isShowB, type, chooseIdx } = this.state
        return (
            <div className="operation">
                <SideNav
                    isShow={isShowNav}
                    type={type}
                    navList={['真实数据', '信息流推广']}
                    changeAnchor={this.changeAnchor}
                    chooseIdx={chooseIdx}
                />
                <Banner
                    bannerClass={"operation-banner-a"}
                    style={{}}
                    content={
                        <div className="banner-title"
                            style={{
                                paddingTop: '3.2rem',
                            }}
                        >
                            <span><TextPlay isShow>品牌运营</TextPlay></span>
                            <div className="p"><TextPlay isShow>抖音托管运营、企业蓝V之选</TextPlay></div>
                            <div className="p"><TextPlay isShow>托管代运营企业粉丝总量超过1600万</TextPlay></div>
                            <span><TextPlay isShow>曝光量总计超过30亿，数据持续刷新中……</TextPlay></span>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentB}
                    bannerClass={"operation-banner-b"}
                    style={{}}
                    content={
                        <div className="operation-banner-content-b">
                            <div className="b-title"><TextPlay isShow={isShowB}>只做真实数据</TextPlay></div>
                            <div className="b-title-s"><TextPlay isShow={isShowB}>真实、精准、高效、曝光</TextPlay></div>
                            <div className="b-grid">
                                <div class="item item-0">
                                    <div className="item-text">
                                        <div><TextPlay isShow={isShowB}>专属蓝V</TextPlay></div>
                                        <div><TextPlay isShow={isShowB}>企业账号专属标识</TextPlay></div>
                                    </div>
                                </div>
                                <div class="item item-1">
                                    <div className="item-text">
                                        <div><TextPlay isShow={isShowB}>企业IP塑造</TextPlay></div>
                                        <div><TextPlay isShow={isShowB}>企业形象深入人心</TextPlay></div>
                                    </div>
                                </div>
                                <div class="item item-2">
                                    <div className="item-text">
                                        <div><TextPlay isShow={isShowB}>爆款视频</TextPlay></div>
                                        <div><TextPlay isShow={isShowB}>引爆全网流量</TextPlay></div>
                                    </div>
                                </div>
                                <div class="item item-3">
                                    <div className="item-text">
                                        <div><TextPlay isShow={isShowB}>专业摄影团队</TextPlay></div>
                                        <div><TextPlay isShow={isShowB}>专业制作让视频镜镜吸睛</TextPlay></div>
                                    </div>
                                </div>
                                <div class="item item-4">
                                    <div className="item-text">
                                        <div><TextPlay isShow={isShowB}>监测与评估</TextPlay></div>
                                        <div><TextPlay isShow={isShowB}>实时掌控舆论的方向</TextPlay></div>
                                    </div>
                                </div>
                                <div class="item item-5">
                                    <div className="item-text">
                                        <div><TextPlay isShow={isShowB}>运营效果</TextPlay></div>
                                        <div><TextPlay isShow={isShowB}>企业根据大数据分析运营状况</TextPlay></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentC}
                    bannerClass={"operation-banner-c"}
                    style={{}}
                    content={
                        <div className="operation-banner-content-c">
                            <ul>
                                <li>
                                    <img src={require('../../assets/images/operation/sticker_6.png')} alt=""/>
                                    <div>
                                        <div className="c-title"><TextPlay isShow={isShowCt}>官方渠道信息流推广</TextPlay></div>
                                        <div className="c-text"><TextPlay isShow={isShowCt}>海量曝光 全面引爆品牌价值</TextPlay></div>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('../../assets/images/operation/sticker_7.png')} alt=""/>
                                    <div>
                                        <div className="c-title"><TextPlay isShow={isShowCt}>海量曝光 全面引爆品牌价值</TextPlay></div>
                                        <div className="c-text"><TextPlay isShow={isShowCt}>集网红孵化、新媒体运营、网络营销推广、摄影制作、网络直播、活动策划、广告发布等商业服务于一体</TextPlay></div>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('../../assets/images/operation/sticker_8.png')} alt=""/>
                                    <div>
                                        <div className="c-title"><TextPlay isShow={isShowCc}>我们的团队</TextPlay></div>
                                        <div className="c-text"><TextPlay isShow={isShowCc}>我们拥有一批专业的资深策划运营、一流的文化精英、优秀的KOL团队</TextPlay></div>
                                    </div>
                                </li>
                                <li>
                                    <img src={require('../../assets/images/operation/sticker_9.png')} alt=""/>
                                    <div>
                                        <div className="c-title"><TextPlay isShow={isShowCb}>我们的信念</TextPlay></div>
                                        <div className="c-text"><TextPlay isShow={isShowCb}>我们注重创意与执行并重，从最初的舞文弄墨到最后的成品，无不渗透了冥思苦想与精诚合作</TextPlay></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                />
            </div>
        )
    }
}

export default Operation