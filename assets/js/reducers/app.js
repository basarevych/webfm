'use strict';

const app = (
  state = {
    viewport: '',
    isStarted: false,
  },
  action
) => {
  switch (action.type) {
    case 'START_APP':
      if (state.isStarted)
        return state;

      return Object.assign(
        {},
        state,
        {
          isStarted: true,
        }
      );
    case 'SCREEN_RESIZE':
      if (state.viewport === action.viewport)
        return state;

      return Object.assign(
        {},
        state,
        {
          viewport: action.viewport,
        }
      );
  }

  return state;
};

export default app;
