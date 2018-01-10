'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/lib/fa';

class LoadingView extends React.PureComponent {
  render() {
    return (
      <div className={'view rounded' + (this.props.isActive ? ' active' : '')}>
        <div className="body disabled">
          <h1>
            <FaCog className="rotating" />
          </h1>
        </div>
      </div>
    );
  }
}

LoadingView.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default LoadingView;
