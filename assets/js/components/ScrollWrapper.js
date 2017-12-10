'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ScrollArea from 'xico2k-react-scroll-area';

class ScrollWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isTrackHidden: false };

    this.onResize = this.onResize.bind(this);
    this.initScrollerRef = this.initScrollerRef.bind(this);
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

  initScrollerRef(el) {
    if (!this.scroller && el) {
      let event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      ReactDOM.findDOMNode(el).dispatchEvent(event);
    }
    this.scroller = el;
  }

  render() {
    return (
      <div className="scroll-wrapper" ref={el => { this.wrapper = el; }}>
        <ScrollArea
          className="scroll-area"
          handlerClassName="scroll-handler"
          trackHideTime={0}
          trackClassName={this.state.isTrackHidden ? 'd-none' : 'd-block'}
          trackVisible={!this.state.isTrackHidden}
          ref={this.initScrollerRef}
        >
          <div ref={el => { this.inner = el; }}>
            {this.props.children}
          </div>
        </ScrollArea>
      </div>
    );
  }
}

export default ScrollWrapper;
