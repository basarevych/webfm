'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const ContentsView = ({ isActive, onPaneClick }) => (
  <div className={'view rounded' + (isActive ? ' active' : '')} onClick={onPaneClick}>
    <div className="body disabled">
      {__('contents_view_message')}
    </div>
  </div>
);

ContentsView.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
};

export default ContentsView;
