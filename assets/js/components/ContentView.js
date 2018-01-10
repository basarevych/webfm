'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { GenericScrollBox } from 'react-scroll-box';
import { FaCog } from 'react-icons/lib/fa';
import Viewport from './ScrollViewport';

class ContentView extends React.PureComponent {
  render() {
    let bodyClass = 'body disabled';
    let body;
    if (!this.props.content) {
      body = __('contents_view_message');
    } else {
      if (this.props.content.isLoading) {
        body = <h1><FaCog className="rotating" /></h1>;
      } else if (this.props.content.isForbidden) {
        body = __('forbidden_message');
      } else if (this.props.content.type !== 'TEXT') {
        body = __(`type_${this.props.content.type}_message`);
      } else {
        body = (
          <div className="scroll-wrapper">
            <GenericScrollBox permitHandleDragInterruption={false}>
              <Viewport classes="text-content" reactList={false}>
                {this.props.content.base64 && atob(this.props.content.base64)}
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
  };
}

ContentView.propTypes = {
  content: PropTypes.object,
};

export default ContentView;
