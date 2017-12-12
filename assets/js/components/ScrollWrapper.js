'use strict';

import React from 'react';
import { ScrollBox, ScrollAxes } from 'react-scroll-box';

class ScrollWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isTrackHidden: false };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('orientationchange', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('orientationchange', this.onResize);
  }

  onResize() {
    if (this.scroller && this.outer && this.inner) {
      let isTrackHidden = this.inner.offsetHeight <= this.outer.clientHeight;
      if (this.state.isTrackHidden !== isTrackHidden)
        this.setState({ isTrackHidden });
    }
  }

  render() {
    return (
      <div className="scroll-wrapper" ref={el => { this.outer = el; }}>
        <ScrollBox disabled={this.state.isTrackHidden} axes={ScrollAxes.Y} ref={el => { this.scroller = el; }}>
          <div ref={el => { this.inner = el; }}>
            {this.props.children}
          </div>
        </ScrollBox>
      </div>
    );
  }
}

export default ScrollWrapper;
