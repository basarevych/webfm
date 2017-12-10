'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const InfoView = ({ isActive, onPaneClick }) => (
  <div className={'view rounded' + (isActive ? ' active' : '')} onClick={onPaneClick}>
    <div className="body disabled">
      {__('info_view_message')}
    </div>
  </div>
);

InfoView.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
};

export default InfoView;
