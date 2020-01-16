import React, { Component } from 'react'
import TextPlay from '@/components/textPlay'
import { Banner } from '@/components/banner'
import SideNav from '@/components/sideNav'
import { throttle } from '@/util/utils'
import { Message } from 'antd'
import { postAddCommit } from '../../util/axios'
import moment from 'moment'

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            isShowNav: false,
            isEnd: false,
            type: 'dark',
            chooseIdx: 0,
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
        const BMap = window.BMap
        var map = new BMap.Map("map-container")
        // 创建地图实例  
        var point = new BMap.Point(116.47943, 39.929332)
        // 创建点坐标  
        map.centerAndZoom(point, 18)
        let marker = new BMap.Marker(point)
        let label = new BMap.Label('柏商商业管理', { position: point, offset: new BMap.Size(-65, -50) })
        window.label = label
        label.setStyle({
            'font-size': '24px',
            'font-weight': '500',
            'line-height': '20px',
            'font-family': 'Source Han Sans CN',
            'border-color': 'white',
            'padding': '11px',
            'box-shadow': '#ccc 1px 2px'
        })
        label.setTitle('柏商商业管理')
        marker.setLabel(label)
        marker.setTitle('柏商商业管理')
        marker.setTop(true)
        map.addOverlay(marker)
        // map.addOverlay(label)
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

    handleChange = (inputType, e) => {
        console.log(e.target.value)
        this.setState({
            [inputType]: e.target.value
        })
    }

    sendMessage = () => {
        const { name, email, message } = this.state  
        const emailRule = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (!name.trim()) {
            Message.warning('请输入姓名')
            return
        }
        if (!email.trim()) {
            Message.warning('请输入邮箱地址')
            return
        }
        if (!message.trim()) {
            Message.warning('请输入留言')
            return
        }
        if (name.length > 6) {
            Message.warning('超过最大字数')
            return
        }
        if (!emailRule.test(email)) {
            Message.warning('请输入正确的邮箱地址')
            return
        }
        let time = moment().format("YYYY-MM-DD HH:mm:ss")
        postAddCommit({name, email,time , message}).then(res => {
            if(res.status == 200){
                Message.info('留言成功！')
            }
        })
    }

    render () {
        const { isShowNav, isShowC, type, chooseIdx } = this.state
        return (
            <div className="contact">
                <SideNav
                    isShow={isShowNav}
                    type={type}
                    navList={['留言', '办公城市']}
                    changeAnchor={this.changeAnchor}
                    chooseIdx={chooseIdx}
                />
                <Banner
                    bannerClass={"contact-banner-a"}
                    style={{}}
                    content={
                        <div className="banner-title"
                            style={{
                                paddingTop: '3.2rem',
                            }}
                        >
                            <span><TextPlay isShow>联系我们</TextPlay></span>
                            <div className="p"><TextPlay isShow>柏商商业</TextPlay></div>
                            <div className="p"><TextPlay isShow>认识你很高兴，欢迎联系！</TextPlay></div>
                            <span><TextPlay isShow>——柏商（湖北）商业管理有限公司</TextPlay></span>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentB}
                    bannerClass={"contact-banner-b"}
                    style={{}}
                    content={
                        <div className="contact-banner-content-b">
                            <img src={require('../../assets/images/about/sticker_0.png')} alt="" />
                            <img src={require('../../assets/images/about/sticker_1.png')} alt="" />
                            <ul className="contact-way">
                                <li>
                                    <div>商务合作</div>
                                    <div>Mail: info@tangux.com</div>
                                </li>
                                <li>
                                    <div>电话</div>
                                    <div>Tel: +86-21-60746536</div>
                                </li>
                                <li>
                                    <div>传真</div>
                                    <div>Tel: +86-21-60746500</div>
                                </li>
                            </ul>
                            <div className="b-title">你将在24小时内收到回复</div>
                            <div className="contact-info">
                                <ul>
                                    <li>
                                        <div>你的名字</div>
                                        <input onChange={this.handleChange.bind(this, 'name')} placeholder="请输入你的名字" />
                                    </li>
                                    <li>
                                        <div>你的邮箱</div>
                                        <input onChange={this.handleChange.bind(this, 'email')} placeholder="请输入你的邮箱" />
                                    </li>
                                </ul>
                                <div className="contact-message">
                                    <p>你希望了解或解决的问题</p>
                                    <textarea onChange={this.handleChange.bind(this, 'message')} placeholder="请输入你希望了解或解决的问题"></textarea>
                                    <button type="button" onClick={this.sendMessage}>发送</button>
                                </div>    
                            </div>
                        </div>
                    }
                />
                <Banner
                    myRef={this.bannerContentC}
                    bannerClass={"contact-banner-c"}
                    style={{}}
                    content={
                        <div className="contact-banner-content-c">
                            <div className="c-title"><TextPlay isShow>北京（总部）</TextPlay></div>
                            <p style={{ display: 'inline-block' }}>
                                <img src={require('../../assets/images/about/sticker_3.png')} alt="" />
                            </p>
                            <div id='map-container' className="map-container"></div>
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

export default Contact
