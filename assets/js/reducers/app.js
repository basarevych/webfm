'use strict';

import viewport from '../lib/viewport';

const app = (
  state = {
    viewport: '',
    started: false,
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
