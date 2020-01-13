import React from 'react'
import {Row, Col, Icon, Layout} from 'antd'

const Footer = () => {
    const MyIcon =  Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_1600924_e23bddlkh6j.js',
    })
    return <Layout.Footer className="footer">
        <div className="footer-left-pannel" >
            <div className='footer-icon'>
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
            <hr className='footer-hr1'></hr>
            <span className='footer-cooperation'>合作商家</span>
        </div>
            <Row style={{width: '13.42rem', height: '4.21rem', float: 'right'}}>
                <Row className='footer-icon'>
                    <MyIcon type="iconqq" />
                    <MyIcon 
                        type="iconweixin-copy"
                        style={{
                            paddingLeft: '.05rem',
                        }} />
                    <MyIcon 
                        type="iconweibo"
                        style={{
                            paddingLeft: '.05rem',
                        }}  />
                </Row>
            </Row>
        </Layout.Footer>
}

export default Footer;