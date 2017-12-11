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

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('orientationchange', this.onResize);
  }

  onResize() {
    if (this.scroller) {
      let isTrackHidden = this.scroller.getInnerHeight() <= this.scroller.getOuterHeight();
      if (this.state.isTrackHidden !== isTrackHidden)
        this.setState({ isTrackHidden });
    }
  }

  initScrollerRef(el) {
    if (!this.scroller && el) {
      let domEl = ReactDOM.findDOMNode(el);

      domEl.dispatchEvent(new MouseEvent(
        'click',
        {
          view: window,
          bubbles: false,
          cancelable: true
        }
      ));
    }
    this.scroller = el;
  }

  render() {
    return (
      <div className="scroll-wrapper">
        <ScrollArea
          className="scroll-area"
          handlerClassName="scroll-handler"
          trackHideTime={0}
          trackClassName={this.state.isTrackHidden ? 'd-none' : 'd-block'}
          trackVisible={!this.state.isTrackHidden}
          ref={this.initScrollerRef}
        >
          <div>
            {this.props.children}
          </div>
        </ScrollArea>
      </div>
    );
  }
}

export default ScrollWrapper;
