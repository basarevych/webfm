'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { GenericScrollBox } from 'react-scroll-box';
import { FaCog } from 'react-icons/lib/fa';
import Viewport from './ScrollViewport';

const ContentView = ({ content }) => {
  let bodyClass = 'body disabled';
  let body;
  if (!content) {
    body = __('contents_view_message');
  } else {
    if (content.isLoading) {
      body = <h1><FaCog className="rotating"/></h1>;
    } else if (content.isForbidden) {
      body = __('forbidden_message');
    } else if (content.type !== 'TEXT') {
      body = __(`type_${content.type}_message`);
    } else {
      body = (
        <div className="scroll-wrapper">
          <GenericScrollBox permitHandleDragInterruption={false}>
            <Viewport classes="text-content">
              {content.base64 && atob(content.base64)}
              <br />
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

ContentView.propTypes = {
  content: PropTypes.object,
};

export default ContentView;
