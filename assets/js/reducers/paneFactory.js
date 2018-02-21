'use strict';

import * as actions from '../constants/actionTypes';
import { fromJS, List } from 'immutable';

const paneFactory = which => {
  let activateAction;
  let deactivateAction;
  let showAction;
  let hideAction;
  let startLoadingAction;
  let stopLoadingAction;
  let modeAction;
  let shareAction;
  let pathAction;
  let listAction;
  let sortAction;
  let selectionAction;
  switch (which) {
    case 'LEFT':
      activateAction = actions.ACTIVATE_LEFT_PANE;
      deactivateAction = actions.DEACTIVATE_LEFT_PANE;
      showAction = actions.SHOW_LEFT_PANE;
      hideAction = actions.HIDE_LEFT_PANE;
      startLoadingAction = actions.START_LEFT_PANE_LOADING;
      stopLoadingAction = actions.STOP_LEFT_PANE_LOADING;
      modeAction = actions.SET_LEFT_PANE_MODE;
      shareAction = actions.SET_LEFT_PANE_SHARE;
      pathAction = actions.SET_LEFT_PANE_PATH;
      listAction = actions.SET_LEFT_PANE_LIST;
      sortAction = actions.SET_LEFT_PANE_SORT;
      selectionAction = actions.SET_LEFT_PANE_SELECTION;
      break;
    case 'RIGHT':
      activateAction = actions.ACTIVATE_RIGHT_PANE;
      deactivateAction = actions.DEACTIVATE_RIGHT_PANE;
      showAction = actions.SHOW_RIGHT_PANE;
      hideAction = actions.HIDE_RIGHT_PANE;
      startLoadingAction = actions.START_RIGHT_PANE_LOADING;
      stopLoadingAction = actions.STOP_RIGHT_PANE_LOADING;
      modeAction = actions.SET_RIGHT_PANE_MODE;
      shareAction = actions.SET_RIGHT_PANE_SHARE;
      pathAction = actions.SET_RIGHT_PANE_PATH;
      listAction = actions.SET_RIGHT_PANE_LIST;
      sortAction = actions.SET_RIGHT_PANE_SORT;
      selectionAction = actions.SET_RIGHT_PANE_SELECTION;
      break;
    default:
      throw new Error('No such pane');
  }

  return (
    state = fromJS({
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
    }),
    action
  ) => {
    switch (action.type) {
      case activateAction:
        if (state.get('isActive'))
          return state;

        return state.set('isActive', true);
      case deactivateAction:
        if (!state.get('isActive'))
          return state;

        return state.set('isActive', false);
      case showAction:
        if (state.get('isVisible'))
          return state;

        return state.set('isVisible', true);
      case hideAction:
        if (!state.get('isVisible'))
          return state;

        return state.set('isVisible', false);
      case startLoadingAction:
        return state.withMutations(map => {
          map
            .set('timestamp', action.timestamp)
            .set('isLoading', true)
            .set('isForbidden', false);
        });
      case stopLoadingAction:
        return state.withMutations(map => {
          map
            .set('timestamp', action.timestamp)
            .set('isLoading', false)
            .set('isForbidden', action.isForbidden || false);
        });
      case modeAction:
        if (state.get('mode') === action.mode)
          return state;

        return state.set('mode', action.mode);
      case shareAction:
        if (state.get('share') === action.share)
          return state;

        return state.set('share', action.share);
      case pathAction:
        if (state.get('path') === action.path && state.get('directory') === action.directory && state.get('name') === action.name)
          return state;

        return state.withMutations(map => {
          map
            .set('path', action.path)
            .set('directory', action.directory)
            .set('name', action.name);
        });
      case listAction:
        if (state.get('list').equals(action.list))
          return state;

        return state.withMutations(map => {
          map
            .set('list', fromJS(action.list))
            .set('selectedIndexes', List(action.selectedIndexes || []).sort());
        });
      case sortAction:
        if (state.get('sortField') === action.field && state.get('sortDir') === action.dir)
          return state;

        return state.withMutations(map => {
          map
            .set('sortField', action.field)
            .set('sortDir', action.dir);
        });
      case selectionAction:
        let selectedIndexes = List(action.selectedIndexes).sort();
        if (state.get('selectedIndexes').equals(selectedIndexes))
          return state;

        return state.set('selectedIndexes', selectedIndexes);
    }

    return state;
  };
};

export default paneFactory;
