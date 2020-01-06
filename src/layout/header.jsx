import React, { Component } from 'react'
import { PageHeader, Menu, Dropdown, Button } from 'antd'
import './header.less'
import brand from './brand.png';
const { Item } = Menu;
export default class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    renderContent = () => {
        switch (this.props.location.pathname) {
            case '/': return <></>          //首页
            case '/about': return <></>     //关于柏商
            case '/contact': return <></>   //联系我们
            case '/band': return <></>      //品牌运营
            case '/custom': return <></>    //企业定制
            case '/gift': return <></>      //礼盒守信
        }
    }

    renderMenu = () => {
        return <Menu mode="horizontal">
            <Item>
                <span className="header-menu-item">简</span>
            </Item>
            <Item>
                <span className="header-menu-item">en</span>
            </Item>
        </Menu>
    }

    render() {
        const menu = this.renderMenu();
        return (
            <PageHeader
                className="layout-header"
                extra={menu}
                title={<img className="header-brand" src={brand}></img>}
            >

            </PageHeader>
        )
    }
}
