'use strict';

const pane = which => {
  return (
    state = {
      which: which,
      mode: 'DISABLED',
      share: '',
      path: '/',
      list: [],
      isActive: false,
      isVisible: true,
    },
    action
  ) => {
    switch (action.type) {
      case `ACTIVATE_${which}_PANE`:
        if (state.isActive)
          return state;

        return Object.assign(
          {},
          state,
          {
            isActive: true,
          }
        );
      case `DEACTIVATE_${which}_PANE`:
        if (!state.isActive)
          return state;

        return Object.assign(
          {},
          state,
          {
            isActive: false,
          }
        );
      case `SHOW_${which}_PANE`:
        if (state.isVisible)
          return state;

        return Object.assign(
          {},
          state,
          {
            isVisible: true,
          }
        );
      case `HIDE_${which}_PANE`:
        if (!state.isVisible)
          return state;

        return Object.assign(
          {},
          state,
          {
            isVisible: false,
          }
        );
      case `SET_${which}_PANE_MODE`:
        if (state.mode === action.mode)
          return state;

        return Object.assign(
          {},
          state,
          {
            mode: action.mode,
          }
        );
      case `SET_${which}_PANE_SHARE`:
        if (state.share === action.share)
          return state;

        return Object.assign(
          {},
          state,
          {
            share: action.share,
          }
        );
      case `SET_${which}_PANE_PATH`:
        if (state.path === action.path)
          return state;

        return Object.assign(
          {},
          state,
          {
            path: action.path,
          }
        );
      case `SET_${which}_PANE_LIST`:
        if (_.isEqual(state.list, action.list))
          return state;

        return Object.assign(
          {},
          state,
          {
            list: action.list,
          }
        );
    }

    return state;
  };
};

export default pane;
