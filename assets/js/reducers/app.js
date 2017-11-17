'use strict';

import viewport from '../lib/viewport';

const app = (
  state = {
    viewport: '',
    started: false,
    locked: 0,
  },
  action
) => {
  switch (action.type) {
    case 'START_APP':
      return Object.assign(
        {},
        state,
        {
          started: true,
        }
      );
    case 'LOCK_APP':
      return Object.assign(
        {},
        state,
        {
          locked: state.locked + 1,
        }
      );
    case 'UNLOCK_APP':
      return Object.assign(
        {},
        state,
        {
          locked: state.locked ? state.locked - 1 : 0,
        }
      );
    case 'SCREEN_RESIZE':
      let newSize = viewport.current();
      if (newSize === 'unrecognized' || newSize === state.viewport)
        return state;

      return Object.assign(
        {},
        state,
        {
          viewport: newSize,
        }
      );
  }

  return state;
};

export default app;
