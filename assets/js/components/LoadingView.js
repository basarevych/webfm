'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/lib/fa';

const LoadingView = ({ isActive, onPaneClick }) => (
  <div className={'view rounded' + (isActive ? ' active' : '')} onClick={onPaneClick}>
    <div className="body disabled">
      <h1>
        <FaCog className="rotating" />
      </h1>
    </div>
  </div>
);

LoadingView.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
};

export default LoadingView;
