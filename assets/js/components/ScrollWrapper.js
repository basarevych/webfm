'use strict';

import React from 'react';
import ScrollArea from 'xico2k-react-scroll-area';

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

  componentDidUpdate() {
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('orientationchange', this.onResize);
  }

  onResize() {
    if (this.wrapper && this.inner) {
      let isTrackHidden = this.inner.offsetHeight <= this.wrapper.clientHeight;
      if (this.state.isTrackHidden !== isTrackHidden)
        this.setState({ isTrackHidden });
    }
  }

  render() {
    return (
      <div className="scroll-wrapper" ref={el => this.wrapper = el}>
        <ScrollArea
          className="scroll-area"
          handlerClassName="scroll-handler"
          trackHideTime={0}
          trackClassName={this.state.isTrackHidden ? 'd-none' : 'd-block'}
        >
          <div ref={el => this.inner = el}>
            {this.props.children}
          </div>
        </ScrollArea>
      </div>
    );
  }
}

export default ScrollWrapper;
