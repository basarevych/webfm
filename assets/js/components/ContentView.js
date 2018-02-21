'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { GenericScrollBox } from 'react-scroll-box';
import { FaCog } from 'react-icons/lib/fa';
import Viewport from './ScrollViewport';

class ContentView extends React.PureComponent {
  static propTypes = {
    content: PropTypes.instanceOf(Map),
  };

  static defaultProps = {
    content: Map({}),
  };

  render() {
    let bodyClass = 'body disabled';
    let body;
    if (!this.props.content.size) {
      body = __('contents_view_message');
    } else {
      if (this.props.content.get('isLoading')) {
        body = <h1><FaCog className="rotating" /></h1>;
      } else if (this.props.content.get('isForbidden')) {
        body = __('forbidden_message');
      } else if (this.props.content.get('type') !== 'TEXT') {
        body = __(`type_${this.props.content.get('type')}_message`);
      } else {
        body = (
          <div className="scroll-wrapper">
            <GenericScrollBox permitHandleDragInterruption={false}>
              <Viewport classes="text-content" reactList={false}>
                {this.props.content.has('base64') && atob(this.props.content.get('base64'))}
                <br/>
              </Viewport>
            </GenericScrollBox>
          </div>
        );
        bodyClass = 'body';
      }
    }

    return (
      <div className={bodyClass}>
        {body}
      </div>
    );
  }
}

export default ContentView;
