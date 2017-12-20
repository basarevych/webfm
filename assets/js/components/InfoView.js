'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const InfoView = ({ isActive }) => (
  <div className={'view rounded' + (isActive ? ' active' : '')}>
    <div className="body disabled">
      {__('info_view_message')}
    </div>
  </div>
);

InfoView.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default InfoView;
