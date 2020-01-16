import React, { Component } from 'react'
import TextPlay from '@/components/textPlay'
import { Banner } from '@/components/banner'
import SideNav from '@/components/sideNav'
import { throttle } from '@/util/utils'
import { Message, Icon } from 'antd'

class Customize extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
            isShowNav: false,
            isEnd: false,
            type: 'light',
            chooseIdx: 0,
            isShowBt: false,
            isShowBc: false,
            isShowBb: false,
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

        if (bTop < 10 && bTop > -1335) {
            this.setState({
                isShowNav: true,
                type: 'light',
                chooseIdx: 0
            })
            return
        }
        if (cTop < 10 && cTop > -1335) {
            this.setState({
                isShowNav: true,
                type: 'dark',
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
        if (document.body.scrollTop > 550 && !isEnd) {
            this.setState({
                isShowBt: true
            })
        }
        if (document.body.scrollTop > 1100 && !isEnd) {
            this.setState({
                isShowBc: true
            })
        }
        if (document.body.scrollTop > 1420 && !isEnd) {
            this.setState({
                isShowBb: true
            })
        }
        if (document.body.scrollTop > 2400 && !isEnd) {
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

    handleChange = (inputType, e) => {
        console.log(e.target.value)
        this.setState({
            [inputType]: e.target.value
        })
    }

    sendMessage = () => {
        const { name, phone, email, message } = this.state
        const emailRule = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        const phoneRule = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
        const mobileRule = /^1[3|4|5|7|8]\d{9}$/
        if (!email.trim()) {
            Message.warning('请输入邮箱地址')
            return
        }
        if (!phone.trim()) {
            Message.warning('请输入电话号码')
            return
        }
        if (!name.trim()) {
            Message.warning('请输入姓名')
            return
        }
        if (!message.trim()) {
            Message.warning('请输入留言')
            return
        }
        if (!phoneRule.test(phone) && !mobileRule.test(phone)) {
            Message.warning('请输入正确的电话号码')
            return
        }
        if (!emailRule.test(email)) {
            Message.warning('请输入正确的邮箱地址')
            return
        }
        if (name.length > 6) {
            Message.warning('超过最大字数')
            return
        }
    }

    render () {
        const { isShowNav, isShowBt, isShowBc, isShowBb, isShowC, type, chooseIdx } = this.state
        const MyIcon =  Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1600924_aursats5h47.js',
        })
        return (
            <div className="customize">
                <SideNav
                    isShow={isShowNav}
                    type={type}
                    navList={['企业定制', '在线留言']}
                    changeAnchor={this.changeAnchor}
                    chooseIdx={chooseIdx}
                />
                <Banner
                    bannerClass={"customize-banner-a"}
                    style={{}}
                    content={
                        <div className="banner-title"
                            style={{
                                paddingTop: '3.2rem',
                            }}
                        >
                            <span><TextPlay isShow>企业定制</TextPlay></span>
                            <div className="p"><TextPlay isShow>成熟体系与专业团队，为企业提供</TextPlay></div>
                            <div className="p"><TextPlay isShow>“度身订造”的贴心服务</TextPlay></div>
                            <span><TextPlay isShow>提升企业形象，商务馈赠之选 以企业品牌文化及特色为设计理念，量身定制专属您的企业厚礼</TextPlay></span>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentB}
                    bannerClass={"customize-banner-b"}
                    style={{}}
                    content={
                        <div className="customize-banner-content-b">
                            <ul>
                                <li>
                                    <img className="transform" src={require('../../assets/images/customize/sticker_0.png')} alt=""/>
                                    <div>
                                        <div className="b-title"><TextPlay isShow={isShowBt}>茶叶</TextPlay></div>
                                        <div className="b-text"><TextPlay isShow={isShowBt}>专业产品顾问全链条式品质把关，精挑细作，叶叶严选</TextPlay></div>
                                    </div>
                                </li>
                                <li>
                                    <img className="transform" src={require('../../assets/images/customize/sticker_1.png')} alt=""/>
                                    <div>
                                        <div className="b-title"><TextPlay isShow={isShowBt}>景德镇陶瓷</TextPlay></div>
                                        <div className="b-text"><TextPlay isShow={isShowBt}>“瓷都”窑制，匠心打造</TextPlay></div>
                                    </div>
                                </li>
                                <li>
                                    <img className="transform" src={require('../../assets/images/customize/sticker_2.png')} alt=""/>
                                    <div>
                                        <div className="b-title"><TextPlay isShow={isShowBc}>党参</TextPlay></div>
                                        <div className="b-text"><TextPlay isShow={isShowBc}>严选生长于气候凉爽、阳光充足的甘肃党参，富有糖分，入口鲜甜十足，甘香可口</TextPlay></div>
                                    </div>
                                </li>
                                <li>
                                    <img className="transform" src={require('../../assets/images/customize/sticker_3.png')} alt=""/>
                                    <div>
                                        <div className="b-title"><TextPlay isShow={isShowBb}>黑枸杞</TextPlay></div>
                                        <div className="b-text"><TextPlay isShow={isShowBb}>精选青海柴达木盆地诺木洪地区黑枸杞，花青素含量极高,富含蛋白质、枸杞多糖、氨基酸、维生素、矿物质、微量元素等多种营养成分</TextPlay></div>
                                    </div>
                                </li>
                                <li>
                                    <img className="transform" src={require('../../assets/images/customize/sticker_4.png')} alt=""/>
                                    <div>
                                        <div className="b-title"><TextPlay isShow={isShowBb}>坚果熟食</TextPlay></div>
                                        <div className="b-text"><TextPlay isShow={isShowBb}>穿越云南古寨、长白山原始森林、美国海岸线，巴基斯坦、澳洲热带雨林等8个全世界最美的坚果原产地，采集、捡拾，挖掘出自然馈赠的果实，只为将最好的坚果带给你。</TextPlay></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentC}
                    bannerClass={"customize-banner-c"}
                    style={{}}
                    content={
                        <div className="customize-banner-content-c">
                            <div className="c-title">在线留言</div>
                            <div className="c-title-s">想要加入我们的，提建议都可以联系我们</div>
                            <ul>
                                <li>
                                    <MyIcon type="iconyouxiang"/>
                                    <input onChange={this.handleChange.bind(this, 'email')} placeholder="请输入您的邮箱"/>
                                </li>
                                <li>
                                    <div>
                                        <MyIcon type="icondianhua"/>
                                        <input onChange={this.handleChange.bind(this, 'phone')} placeholder="请输入您的电话"/>
                                    </div>
                                    <div>
                                        <MyIcon type="iconrenyuan"/>
                                        <input onChange={this.handleChange.bind(this, 'name')} placeholder="请输入您的姓名"/>
                                    </div>
                                </li>
                                <li>
                                    <MyIcon type="iconliuyan" className="textarea-icon"/>
                                    <textarea onChange={this.handleChange.bind(this, 'message')} placeholder="请输入您想说的"/>
                                </li>
                            </ul>
                            <div style={{textAlign: 'center'}}>
                                <button onClick={this.sendMessage}>发送</button>
                            </div>
                        </div>
                    }
                />
            </div>
        )
    }
}

export default Customize