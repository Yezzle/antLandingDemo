import React, {Component} from 'react'

export class Banner extends Component {
    render() {
        const { content, style, bannerClass, myRef, ...otherProps} = this.props;
        return (
            <div ref={myRef} className={`first-banner ${bannerClass}`} >
                <div className="banner-content">
                    {content}
                </div>
            </div>
        )  
    }
    
}