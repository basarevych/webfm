'use strict';

const app = (state = { started: false }, action) => {
  switch (action.type) {
    case 'START_APP':
      return { started: true };
  }
  return state;
};

export default app;
