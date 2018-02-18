'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class DisabledView extends React.PureComponent {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className={'view rounded' + (this.props.isActive ? ' active' : '')}>
        <div className="body disabled">
          {__('not_authorized_message')}
        </div>
      </div>
    );
  }
}

export default DisabledView;
