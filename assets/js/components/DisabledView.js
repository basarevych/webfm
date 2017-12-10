'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const DisabledView = ({ isActive, onPaneClick }) => (
  <div className={'view rounded' + (isActive ? ' active' : '')} onClick={onPaneClick}>
    <div className="body disabled">
      {__('not_authorized_message')}
    </div>
  </div>
);

DisabledView.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
};

export default DisabledView;
