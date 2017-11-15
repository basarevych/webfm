'use strict';

const app = (
  state = {
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
  }

  return state;
};

export default app;
