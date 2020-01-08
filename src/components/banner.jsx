import React from 'react'

export const Banner = (props) => {
    const {content, style, bannerClass, ...otherProps} = props;
    return <div 
            className={`first-banner ${bannerClass}`} >
        <div className="banner-content">
            <div className="banner-title"
                style={{
                    paddingTop: '3.75rem',
                    ...style
                }}
            >
                {content}
            </div>
        </div>
    </div>  
}