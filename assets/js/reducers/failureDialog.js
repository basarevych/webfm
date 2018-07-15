import * as actions from '../constants/actionTypes';
import { fromJS } from 'immutable';

const failureDialog = (
  state = fromJS({
    isOpen: false,
    messages: {},
    errors: {},
  }),
  action
) => {
  switch (action.type) {
    case actions.SHOW_FAILURE_DIALOG:
      return state.withMutations(map => {
        map
          .set('isOpen', true)
          .set('messages', fromJS(action.messages || {}))
          .set('errors', fromJS(action.errors || {}));
      });
    case actions.HIDE_FAILURE_DIALOG:
      return state.set('isOpen', false);
  }

  return state;
};

export default failureDialog;
