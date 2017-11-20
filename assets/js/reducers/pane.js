'use strict';

const pane = prefix => {
  return (
    state = {
      active: false,
    },
    action
  ) => {
    switch (action.type) {
      case `ACTIVATE_${prefix}_PANE`:
        return Object.assign(
          {},
          state,
          {
            active: true,
          }
        );
      case `DEACTIVATE_${prefix}_PANE`:
        return Object.assign(
          {},
          state,
          {
            active: false,
          }
        );
    }

    return state;
  };
};

export default pane;
