'use strict';

import * as actions from '../constants/actionTypes';

const paneFactory = which => {
  return (
    state = {
      timestamp: 0,
      mode: 'LIST',
      sortField: 'NAME',
      sortDir: 'ASC',
      share: '',
      path: '',
      directory: '',
      name: '',
      list: [],
      selectedIndexes: [],
      isActive: false,
      isVisible: true,
      isLoading: false,
      isForbidden: false,
    },
    action
  ) => {
    switch (action.type) {
      case (which === 'LEFT' ? actions.ACTIVATE_LEFT_PANE : actions.ACTIVATE_RIGHT_PANE):
        if (state.isActive)
          return state;

        return _.cloneDeep({
          ...state,
          isActive: true,
        });
      case (which === 'LEFT' ? actions.DEACTIVATE_LEFT_PANE : actions.DEACTIVATE_RIGHT_PANE):
        if (!state.isActive)
          return state;

        return _.cloneDeep({
          ...state,
          isActive: false,
        });
      case (which === 'LEFT' ? actions.SHOW_LEFT_PANE : actions.SHOW_RIGHT_PANE):
        if (state.isVisible)
          return state;

        return _.cloneDeep({
          ...state,
          isVisible: true,
        });
      case (which === 'LEFT' ? actions.HIDE_LEFT_PANE : actions.HIDE_RIGHT_PANE):
        if (!state.isVisible)
          return state;

        return _.cloneDeep({
          ...state,
          isVisible: false,
        });
      case (which === 'LEFT' ? actions.START_LEFT_PANE_LOADING : actions.START_RIGHT_PANE_LOADING):
        return _.cloneDeep({
          ...state,
          timestamp: action.timestamp,
          isLoading: true,
          isForbidden: false,
        });
      case (which === 'LEFT' ? actions.STOP_LEFT_PANE_LOADING : actions.STOP_RIGHT_PANE_LOADING):
        return _.cloneDeep({
          ...state,
          timestamp: action.timestamp,
          isLoading: false,
          isForbidden: action.isForbidden,
        });
      case (which === 'LEFT' ? actions.SET_LEFT_PANE_MODE : actions.SET_RIGHT_PANE_MODE):
        if (state.mode === action.mode)
          return state;

        return _.cloneDeep({
          ...state,
          mode: action.mode,
        });
      case (which === 'LEFT' ? actions.SET_LEFT_PANE_SHARE : actions.SET_RIGHT_PANE_SHARE):
        if (state.share === action.share)
          return state;

        return _.cloneDeep({
          ...state,
          share: action.share,
        });
      case (which === 'LEFT' ? actions.SET_LEFT_PANE_PATH : actions.SET_RIGHT_PANE_PATH):
        if (state.path === action.path && state.directory === action.directory && state.name === action.name)
          return state;

        return _.cloneDeep({
          ...state,
          path: action.path,
          directory: action.directory,
          name: action.name,
        });
      case (which === 'LEFT' ? actions.SET_LEFT_PANE_LIST : actions.SET_RIGHT_PANE_LIST):
        if (_.isEqual(state.list, action.list))
          return state;

        return _.cloneDeep({
          ...state,
          list: action.list,
          selectedIndexes: action.selectedIndexes || [],
        });
      case (which === 'LEFT' ? actions.SET_LEFT_PANE_SORT : actions.SET_RIGHT_PANE_SORT):
        if (state.sortField === action.field && state.sortDir === action.dir)
          return state;

        return _.cloneDeep({
          ...state,
          sortField: action.field,
          sortDir: action.dir,
        });
      case (which === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION):
        let selectedIndexes = action.selectedIndexes.slice().sort();
        if (_.isEqual(state.selectedIndexes, selectedIndexes))
          return state;

        return _.cloneDeep({
          ...state,
          selectedIndexes,
        });
    }

    return state;
  };
};

export default paneFactory;
