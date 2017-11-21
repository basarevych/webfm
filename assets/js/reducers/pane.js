'use strict';

const pane = which => {
  return (
    state = {
      which: which,
      isActive: false,
      isVisible: true,
    },
    action
  ) => {
    switch (action.type) {
      case `ACTIVATE_${which}_PANE`:
        return Object.assign(
          {},
          state,
          {
            isActive: true,
          }
        );
      case `DEACTIVATE_${which}_PANE`:
        return Object.assign(
          {},
          state,
          {
            isActive: false,
          }
        );
      case `SHOW_${which}_PANE`:
        return Object.assign(
          {},
          state,
          {
            isVisible: true,
          }
        );
      case `HIDE_${which}_PANE`:
        return Object.assign(
          {},
          state,
          {
            isVisible: false,
          }
        );
    }

    return state;
  };
};

export default pane;
