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
      return Object.assign(
        {},
        state,
        {
          isStarted: true,
        }
      );
    case 'SCREEN_RESIZE':
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
