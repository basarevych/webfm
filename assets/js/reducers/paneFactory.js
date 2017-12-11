'use strict';

const paneFactory = which => {
  return (
    state = {
      timestamp: 0,
      mode: 'LIST',
      share: '',
      path: '/',
      isActive: false,
      isVisible: true,
      isLoading: true,
      isForbidden: false,
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
      case `START_${which}_PANE_LOADING`:
        return Object.assign(
          {},
          state,
          {
            timestamp: action.timestamp,
            isLoading: true,
            isForbidden: false,
          }
        );
      case `STOP_${which}_PANE_LOADING`:
        if (state.timestamp !== action.timestamp)
          return state;

        return Object.assign(
          {},
          state,
          {
            isLoading: false,
            isForbidden: action.isForbidden,
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
    }

    return state;
  };
};

export default paneFactory;
