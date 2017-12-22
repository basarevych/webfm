'use strict';

const paneFactory = which => {
  return (
    state = {
      timestamp: 0,
      mode: 'LIST',
      sortField: 'NAME',
      sortDir: 'ASC',
      share: '',
      path: '/',
      list: [],
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

        return _.cloneDeep({
          ...state,
          isActive: true,
        });
      case `DEACTIVATE_${which}_PANE`:
        if (!state.isActive)
          return state;

        return _.cloneDeep({
          ...state,
          isActive: false,
        });
      case `SHOW_${which}_PANE`:
        if (state.isVisible)
          return state;

        return _.cloneDeep({
          ...state,
          isVisible: true,
        });
      case `HIDE_${which}_PANE`:
        if (!state.isVisible)
          return state;

        return _.cloneDeep({
          ...state,
          isVisible: false,
        });
      case `START_${which}_PANE_LOADING`:
        return _.cloneDeep({
          ...state,
          timestamp: action.timestamp,
          isLoading: true,
          isForbidden: false,
        });
      case `STOP_${which}_PANE_LOADING`:
        return _.cloneDeep({
          ...state,
          timestamp: action.timestamp,
          isLoading: false,
          isForbidden: action.isForbidden,
        });
      case `SET_${which}_PANE_MODE`:
        if (state.mode === action.mode)
          return state;

        return _.cloneDeep({
          ...state,
          mode: action.mode,
        });
      case `SET_${which}_PANE_SHARE`:
        if (state.share === action.share)
          return state;

        return _.cloneDeep({
          ...state,
          share: action.share,
        });
      case `SET_${which}_PANE_PATH`:
        if (state.path === action.path)
          return state;

        return _.cloneDeep({
          ...state,
          path: action.path,
        });
      case `SET_${which}_PANE_LIST`:
        if (_.isEqual(state.list, action.list))
          return state;

        return _.cloneDeep({
          ...state,
          list: action.list,
        });
      case `SET_${which}_PANE_SORT`:
        if (state.sortField === action.field && state.sortDir === action.dir)
          return state;

        return _.cloneDeep({
          ...state,
          sortField: action.field,
          sortDir: action.dir,
        });
    }

    return state;
  };
};

export default paneFactory;
