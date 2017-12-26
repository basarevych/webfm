'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

class Viewport extends React.Component {
  componentDidMount() {
    this.viewport = null;

    try {
      document.createEvent('TouchEvent');
    } catch (error) {
      return;
    }

    this.viewport = ReactDOM.findDOMNode(this);

    let scrollStartTop = 0;
    let scrollStartLeft = 0;
    let scrollTop = 0;
    let scrollLeft = 0;
    let frameId = null;
    let frame = () => {
      frameId = null;
      this.viewport.scrollTop = scrollTop;
      this.viewport.scrollLeft = scrollLeft;
    };
    this.touchStartHandler = function (event) {
      scrollStartTop = this.scrollTop + event.touches[0].pageY;
      scrollStartLeft = this.scrollLeft + event.touches[0].pageX;
    };
    this.touchMoveHandler = function (event) {
      event.preventDefault();
      scrollTop = scrollStartTop - event.touches[0].pageY;
      scrollLeft = scrollStartLeft - event.touches[0].pageX;
      if (!frameId)
        frameId = requestAnimationFrame(frame);
    };

    this.viewport.addEventListener('touchstart', this.touchStartHandler, false);
    this.viewport.addEventListener('touchmove', this.touchMoveHandler, false);
  }

  componentWillUnmount() {
    if (this.viewport) {
      this.viewport.removeEventListener('touchstart', this.touchStartHandler);
      this.viewport.removeEventListener('touchmove', this.touchMoveHandler);
    }
  }

  render() {
    let target;
    if (this.props.reactList)
      target = React.cloneElement(this.props.children, { scrollParentGetter: () => ReactDOM.findDOMNode(this) });
    else
      target = this.props.children;

    return (
      <div className={'scroll-box__viewport' + (this.props.classes ? ` ${this.props.classes}` : '')}>
        {target}
      </div>
    );
  }
}

Viewport.propTypes = {
  classes: PropTypes.string,
  reactList: PropTypes.bool,
};

export default Viewport;
