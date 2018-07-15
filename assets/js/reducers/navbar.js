import * as actions from '../constants/actionTypes';
import { Map } from 'immutable';

const navbar = (
  state = Map({
    isOpen: false,
  }),
  action
) => {
  switch (action.type) {
    case actions.OPEN_NAVBAR:
      if (state.get('isOpen'))
        return state;

      return state.set('isOpen', true);
    case actions.CLOSE_NAVBAR:
      if (!state.get('isOpen'))
        return state;

      return state.set('isOpen', false);
    case actions.TOGGLE_NAVBAR:
      return state.set('isOpen', !state.get('isOpen'));
  }

  return state;
};

export default navbar;
