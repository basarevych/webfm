'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { FaCog } from 'react-icons/lib/fa';

class ContentBody extends React.Component {
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
        body = this.props.content.has('base64') && atob(this.props.content.get('base64'));
        bodyClass = 'body content-body';
      }
    }

    return (
      <div className={bodyClass}>
        {body}
      </div>
    );
  }
}

export default ContentBody;
