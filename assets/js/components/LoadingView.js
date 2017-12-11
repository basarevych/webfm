'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const LoadingView = ({ isActive, onPaneClick }) => (
  <div className={'view rounded' + (isActive ? ' active' : '')} onClick={onPaneClick}>
    <div className="body disabled">
      <h1>
        <i className="fa fa-spin fa-fw fa-cog" />
      </h1>
    </div>
  </div>
);

LoadingView.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
};

export default LoadingView;
