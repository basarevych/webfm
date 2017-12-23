'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { GenericScrollBox } from 'react-scroll-box';
import { FaCog } from 'react-icons/lib/fa';


const ContentsView = ({ isActive, content }) => {
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
            <div className="scroll-box__viewport text-content">
              {content.base64 && atob(content.base64)}
              <br />
            </div>
          </GenericScrollBox>
        </div>
      );
      bodyClass = 'body';
    }
  }

  return (
    <div className={'view rounded' + (isActive ? ' active' : '')}>
      <div className={bodyClass}>
        {body}
      </div>
    </div>
  );
};

ContentsView.propTypes = {
  isActive: PropTypes.bool.isRequired,
  content: PropTypes.object,
};

export default ContentsView;
