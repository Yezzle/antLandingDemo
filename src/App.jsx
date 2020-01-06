/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Header from '@/layout/header'
import Home from '@/pages/home/home'

import '@/styles/index.less';

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
        <Header />
        {this.props.children || <Home {...this.props} />}
      </div>
    );
  }
}

export default App
