'use strict';

import { Tooltip } from 'reactstrap';

class SafeTooltip extends Tooltip {
  componentDidMount() {
    try {
      super.componentDidMount();
    } catch (unusedError) {
      // do nothing
    }
  }

  addTargetEvents() {
    if (this._target)
      super.addTargetEvents();
  }

  removeTargetEvents() {
    if (this._target)
      super.removeTargetEvents();
  }

  render() {
    if (this._target)
      return super.render();

    return null;
  }
}

export default SafeTooltip;
