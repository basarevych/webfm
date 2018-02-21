'use strict';

import * as actions from '../constants/actionTypes';
import { fromJS, Map, List } from 'immutable';

const dialogFactory = type => {
  let initialValues;
  let lockAction;
  let unlockAction;
  let showAction;
  let hideAction;
  let resetAction;
  let submitAction;
  let updateAction;
  let startFindAction;
  let stopFindAction;

  switch (type) {
    case 'COPY':
      initialValues = {
        srcShare: '',
        srcDirectory: '',
        srcName: '',
        dstShare: '',
        dstDirectory: '',
      };
      lockAction = actions.LOCK_COPY_DIALOG;
      unlockAction = actions.UNLOCK_COPY_DIALOG;
      showAction = actions.SHOW_COPY_DIALOG;
      hideAction = actions.HIDE_COPY_DIALOG;
      resetAction = actions.RESET_COPY_DIALOG;
      submitAction = actions.SUBMIT_COPY_DIALOG;
      updateAction = actions.UPDATE_COPY_DIALOG;
      startFindAction = actions.START_COPY_DIALOG_FIND;
      stopFindAction = actions.STOP_COPY_DIALOG_FIND;
      break;
    case 'MOVE':
      initialValues = {
        srcShare: '',
        srcDirectory: '',
        srcName: '',
        dstShare: '',
        dstDirectory: '',
      };
      lockAction = actions.LOCK_MOVE_DIALOG;
      unlockAction = actions.UNLOCK_MOVE_DIALOG;
      showAction = actions.SHOW_MOVE_DIALOG;
      hideAction = actions.HIDE_MOVE_DIALOG;
      resetAction = actions.RESET_MOVE_DIALOG;
      submitAction = actions.SUBMIT_MOVE_DIALOG;
      updateAction = actions.UPDATE_MOVE_DIALOG;
      startFindAction = actions.START_MOVE_DIALOG_FIND;
      stopFindAction = actions.STOP_MOVE_DIALOG_FIND;
      break;
    case 'DELETE':
      initialValues = {
        share: '',
        directory: '',
        name: '',
      };
      lockAction = actions.LOCK_DELETE_DIALOG;
      unlockAction = actions.UNLOCK_DELETE_DIALOG;
      showAction = actions.SHOW_DELETE_DIALOG;
      hideAction = actions.HIDE_DELETE_DIALOG;
      resetAction = actions.RESET_DELETE_DIALOG;
      submitAction = actions.SUBMIT_DELETE_DIALOG;
      updateAction = actions.UPDATE_DELETE_DIALOG;
      startFindAction = actions.START_DELETE_DIALOG_FIND;
      stopFindAction = actions.STOP_DELETE_DIALOG_FIND;
      break;
    case 'MKDIR':
      initialValues = {
        share: '',
        directory: '',
        name: '',
      };
      lockAction = actions.LOCK_MKDIR_DIALOG;
      unlockAction = actions.UNLOCK_MKDIR_DIALOG;
      showAction = actions.SHOW_MKDIR_DIALOG;
      hideAction = actions.HIDE_MKDIR_DIALOG;
      resetAction = actions.RESET_MKDIR_DIALOG;
      submitAction = actions.SUBMIT_MKDIR_DIALOG;
      updateAction = actions.UPDATE_MKDIR_DIALOG;
      startFindAction = actions.UNUSED;
      stopFindAction = actions.UNUSED;
      break;
    case 'RENAME':
      initialValues = {
        share: '',
        directory: '',
        name: '',
        newName: '',
      };
      lockAction = actions.LOCK_RENAME_DIALOG;
      unlockAction = actions.UNLOCK_RENAME_DIALOG;
      showAction = actions.SHOW_RENAME_DIALOG;
      hideAction = actions.HIDE_RENAME_DIALOG;
      resetAction = actions.RESET_RENAME_DIALOG;
      submitAction = actions.SUBMIT_RENAME_DIALOG;
      updateAction = actions.UPDATE_RENAME_DIALOG;
      startFindAction = actions.UNUSED;
      stopFindAction = actions.UNUSED;
      break;
    case 'SIGN_IN':
      initialValues = {
        login: '',
        password: '',
      };
      lockAction = actions.LOCK_SIGN_IN_DIALOG;
      unlockAction = actions.UNLOCK_SIGN_IN_DIALOG;
      showAction = actions.SHOW_SIGN_IN_DIALOG;
      hideAction = actions.HIDE_SIGN_IN_DIALOG;
      resetAction = actions.RESET_SIGN_IN_DIALOG;
      submitAction = actions.SUBMIT_SIGN_IN_DIALOG;
      updateAction = actions.UPDATE_SIGN_IN_DIALOG;
      startFindAction = actions.UNUSED;
      stopFindAction = actions.UNUSED;
      break;
    default:
      throw new Error('Unknown dialog type');
  }

  return (
    state = fromJS({
      submittedAt: 0,
      isOpen: false,
      locked: 0,
      values: initialValues,
      messages: {},
      errors: {},
      found: {
        isLoading: false,
        isLoaded: false,
        nodes: [],
      },
    }),
    action
  ) => {
    switch (action.type) {
      case lockAction:
        return state.set('locked', state.get('locked') + 1);
      case unlockAction:
        if (state.get('locked') === 0)
          return state;

        return state.set('locked', state.get('locked') - 1);
      case showAction:
        if (state.get('isOpen'))
          return state;

        return state.set('isOpen', true);
      case hideAction:
        if (!state.get('isOpen'))
          return state;

        return state.set('isOpen', false);
      case resetAction:
        return state.withMutations(map => {
          map
            .set('errors', Map({}))
            .set('messages', Map({}))
            .setIn(['found', 'isLoading'], false)
            .setIn(['found', 'isLoaded'], false)
            .setIn(['found', 'nodes'], List([]));

          if (action.values)
            map.set('values', fromJS(action.values));
        });
      case submitAction:
        if (action.submittedAt <= state.get('submittedAt'))
          return state;

        return state.set('submittedAt', action.submittedAt);
      case updateAction:
        if (action.submittedAt < state.get('submittedAt'))
          return state;

        return state.withMutations(map => {
          map.set('submittedAt', action.submittedAt);
          if (action.data.values) {
            map.set(
              'values',
              map
                .get('values')
                .merge(fromJS(action.data.values))
            );
          }
          if (action.data.errors) {
            map.set(
              'errors',
              map
                .get('errors')
                .merge(fromJS(action.data.errors))
                .filter(value => value.size)
            );
          }
          if (action.data.messages) {
            map.set(
              'messages',
              fromJS(action.data.messages)
                .filter(value => value.size)
            );
          }
        });
      case startFindAction:
        return state.withMutations(map => {
          map
            .setIn(['found', 'isLoading'], true)
            .setIn(['found', 'isLoaded'], false)
            .setIn(['found', 'nodes'], List([]));
        });
      case stopFindAction:
        return state.withMutations(map => {
          map
            .setIn(['found', 'isLoading'], !action.nodes)
            .setIn(['found', 'isLoaded'], !!action.nodes)
            .setIn(['found', 'nodes'], fromJS(action.nodes || []));
        });
    }

    return state;
  };
};

export default dialogFactory;
