'use strict';

import React from 'react';
import { Tooltip } from 'reactstrap';

class SafeTooltip extends Tooltip {
  addTargetEvents() {
    if (this._target)
      super.addTargetEvents();
  }

  removeTargetEvents() {
    if (this._target)
      super.removeTargetEvents();
  }

  render() {
    if (this.props.target())
      return super.render();

    return null;
  }
}

export default SafeTooltip;
