'use strict';

const pane = which => {
  return (
    state = {
      which: which,
      mode: 'LIST',
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
      case `SET_${which}_PANE_MODE`:
        return Object.assign(
          {},
          state,
          {
            mode: action.mode,
          }
        );
    }

    return state;
  };
};

export default pane;
