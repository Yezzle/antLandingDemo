import React, { Component } from 'react'
import { PageHeader, Menu, Dropdown, Button, Icon, Input } from 'antd'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabArr: [
                {
                    label: '首页',
                    url: '/',
                },
                {
                    label: '企业定制',
                    url: '/customize',
                },
                {
                    label: '关于柏商',
                    url: '/about',
                },
                {
                    label: '品牌运营',
                    url: '/operation',
                },
                {
                    label: '礼盒守信',
                    url: '/box',
                },
                {
                    label: '联系我们',
                    url: '/contact',
                }
            ]
        }
    }

    changePage = ({ key }) => {
        this.props.router.push(key)
    }

    render() {
        const { tabArr } = this.state
        const MyIcon =  Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1600924_e23bddlkh6j.js',
        })
        const Logo = () => (
            <div
                style={{
                    fontSize: '.42rem',
                }} 
            >
                <MyIcon 
                    key="logo"
                    type="iconlogo"
                />
                <MyIcon 
                    key="logo-brand"
                    className="header-brand-fit"
                    type="iconbrand-white"
                    style={{
                        paddingLeft: '.05rem',
                    }} 
                />
            </div>
        )
        const menu = (
            <Menu
                theme='dark'
                onClick={this.changePage}
            >
                {
                    tabArr.map((item, index) => (
                        <Menu.Item key={item.url}>{item.label}</Menu.Item>
                    ))
                }
            </Menu>
        )
        const DropdownMenu = () => (
            <Dropdown key="nav" overlay={menu}>
                <Icon
                    type="menu"
                    style={{
                        color: '#fff',
                        fontSize: '.2rem',
                        cursor: 'pointer',
                    }}
                />
            </Dropdown>
        )
        
        return (
            <PageHeader
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    padding: '0 .44rem',
                    width: '100%',
                    height: '.78rem',
                    lineHeight: '.78rem',
                    // border: '1px solid rgb(235, 237, 240)',
                }}
                title={[<Logo key="logo"/>]}
                extra={[
                    <MyIcon 
                        key="iconsearch"
                        type="iconsearch"
                        style={{
                            paddingRight: '1.2rem',
                            color: '#fff',
                            fontSize: '.2rem',
                        }} />,
                    <DropdownMenu key="dropdown"/>
                ]}
            >   
            </PageHeader>
        )
    }
}
