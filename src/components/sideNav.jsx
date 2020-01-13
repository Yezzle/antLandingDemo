import React, { Component } from 'react'
import TextPlay from './textPlay';

export class SideNav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { chooseIdx } = this.props
        const navList = this.props.navList
        const type = this.props.type || 'dark'
        return(
            <div className="sideNav">
                {navList && navList.map((item, index) => (
                    <div key={index} onClick={this.props.changeAnchor.bind(this, index)} className={index == chooseIdx ? `underline choose-${type}` : `${type}`}>
                        <TextPlay isShow={this.props.isShow}>{item}</TextPlay>
                    </div>
                    )
                )}
            </div>
        )
    }
}
export default SideNav