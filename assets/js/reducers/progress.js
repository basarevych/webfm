import * as actions from '../constants/actionTypes';
import { fromJS } from 'immutable';

const progress = (
  state = fromJS({
    isStarted: false,
    isFinished: false,
    message: '',
  }),
  action
) => {
  switch (action.type) {
    case actions.START_PROGRESS:
      return state.withMutations(map => {
        map
          .set('isStarted', true)
          .set('isFinished', false)
          .set('message', action.message);
      });
    case actions.UPDATE_PROGRESS:
      if (!action.message)
        return state;

      return state.withMutations(map => {
        map
          .set('isStarted', true)
          .set('isFinished', false)
          .set('message', state.get('message') + action.message);
      });
    case actions.FINISH_PROGRESS:
      return state.withMutations(map => {
        map
          .set('isStarted', true)
          .set('isFinished', true)
          .set('message', state.get('message') + action.message || '');
      });
    case actions.CLEAR_PROGRESS:
      if (!state.get('isStarted'))
        return state;

      return state.withMutations(map => {
        map
          .set('isStarted', false)
          .set('isFinished', false)
          .set('message', '');
      });
  }

  return state;
};

export default progress;
