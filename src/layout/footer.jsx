import React from 'react'
import {Row, Col, Icon, Layout} from 'antd'

const Footer = () => {
    const MyIcon =  Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_1600924_58ld507nkdk.js',
    })
    return <Layout.Footer className="footer">
        <div className="footer-left-pannel" >
            <div className='footer-icon-l'>
                <MyIcon 
                    type="iconlogo"
                    />
                <MyIcon 
                    type="iconbrand-blue"
                    style={{
                        paddingLeft: '.05rem',
                    }} 
                    />
            </div>
            <div className="copy-right">
                <span>Copyright © 2007-2020 TANG</span>
                <br></br>
                <span>沪ICP备17016081号</span>
            </div>
            <div className='footer-cooperation'>合作商家</div>
        </div>
        <div className="footer-right-pannel">
            <div className="footer-icon-r">
                <MyIcon type="iconqq" />
                <MyIcon 
                    type="iconweixin-copy" 
                    style={{
                        paddingLeft: '.4rem',
                    }} />
                <MyIcon 
                    type="iconweibo" 
                    style={{
                        paddingLeft: '.4rem',
                    }}/>
            </div>
            <div className="footer-right-info clearfix">
                <div>
                    <p>联系电话</p>
                    <p>027- 6552 - 4496</p>
                </div>
                <div>
                    <p>我的地址 </p>
                    <p>武汉是江夏区光谷芯中心D4区3栋</p>
                </div>
                <div>
                    <p>工作时间</p>
                    <p>9:00~18:00（周一至周日）</p>
                </div>
                <div>
                    <p>公司邮箱</p>
                    <p>songning@pakshang.com</p>
                </div>
            </div>
            <ul className="footer-right-tab clearfix">
                <li>碧螺春</li>
                <li>信阳毛尖</li>
                <li>西湖龙井</li>
                <li>君山银针</li>
                <li>黄山毛峰</li>
                <li>武夷岩茶</li>
                <li>祁门红茶</li>
                <li>都匀毛尖</li>
                <li>铁观音</li>
                <li>六安瓜片</li>
            </ul>
        </div>
        </Layout.Footer>
}

export default Footer;