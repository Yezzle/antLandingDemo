import React, { Component } from 'react'
import { PageHeader } from 'antd'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <PageHeader
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: '100%',
                    border: '1px solid rgb(235, 237, 240)',
                }}
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
            />
        )
    }
}
