/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Header from '@/layout/header'
import Home from '@/pages/home/home'

import '@/styles/index.less';
import Footer from './layout/footer';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
      if(b){
        let w = window.innerWidth, h = window.innerHeight
        let minWidth = 1300;
        let scale = Math.min( w/minWidth, 1.0 )
        document.children[0].style['font-size'] = `${80*Math.max(scale,1.0)}px`
        document.body.setAttribute('style', `min-width: ${w/scale}px; transform: scale(${scale}); transform-origin: 0 0; height: ${h/scale}px`)
        
      }
    });
  }

  render() {
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        <Header {...this.props} />
        {this.props.children || <Home {...this.props} />}
        <Footer></Footer>
      </div>
    );
  }
}

export default App
