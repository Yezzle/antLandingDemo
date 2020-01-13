import React, { Component } from 'react'
import Texty from 'rc-texty'

const getInnerString = (element) => {
    return element.props && element.props.children ? getInnerString(element.props.children) : element
}

const TextPlay = (props) => {
    let str = getInnerString(props.children)
    return props.isShow ? <Texty
            type={props.type || 'left'}
            mode={props.mode || 'smooth'}
            delay={props.delay || 0}
            duration={props.duration || 400}
        >{str}</Texty> : ''
}
export default TextPlay

