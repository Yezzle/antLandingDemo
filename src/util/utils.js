import React from 'react';
import {
    Button
} from 'antd';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
    let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
    tag = item.href ? 'a' : tag;
    let children = typeof item.children === 'string' && item.children.match(isImg) ?
        React.createElement('img', {
            src: item.children,
            alt: 'img'
        }) :
        item.children;
    if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
        children = React.createElement(Button, {
            ...item.children
        });
    }
    return React.createElement(tag, {
        key: i.toString(),
        ...item
    }, children);
};

// 函数节流
export const throttle = (func, wait = 100, type = 2, ...args) => {
    let prev = Date.now();
    let timeout
    return () => {
        if (type === 1) {
            let now = Date.now()
            if (now - prev > wait) {
                func.apply(this, args)
                prev = now
            }
        } else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null
                    func.apply(this, args)
                }, wait);
            }
        }
    }
};