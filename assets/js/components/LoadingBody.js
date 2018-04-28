'use strict';

import React from 'react';
import { FaCog } from 'react-icons/lib/fa';

class LoadingBody extends React.PureComponent {
  render() {
    return (
      <div className="body disabled">
        <h1>
          <FaCog className="rotating" />
        </h1>
      </div>
    );
  }
}

export default LoadingBody;
