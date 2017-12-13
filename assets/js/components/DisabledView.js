'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const DisabledView = ({ isActive }) => (
  <div className={'view rounded' + (isActive ? ' active' : '')}>
    <div className="body disabled">
      {__('not_authorized_message')}
    </div>
  </div>
);

DisabledView.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default DisabledView;
