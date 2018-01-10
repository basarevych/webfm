'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class DisabledView extends React.PureComponent {
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

DisabledView.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default DisabledView;
