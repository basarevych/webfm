'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const ContentsView = ({ isActive }) => (
  <div className={'view rounded' + (isActive ? ' active' : '')}>
    <div className="body disabled">
      {__('contents_view_message')}
    </div>
  </div>
);

ContentsView.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default ContentsView;
