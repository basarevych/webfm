'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/lib/fa';

class LoadingView extends React.PureComponent {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

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

export default LoadingView;
