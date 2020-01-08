import React, { Component } from 'react'
import Texty from 'rc-texty';

const getInnerString = (element) => {
    return element.props&&element.props.children? getInnerString(element.props.children): element;
}

const TextPlay = (props) => {
    let str = getInnerString(props.children);
    console.log(props.children, str)
    return <Texty>{str}</Texty>
}
export default TextPlay

