'use strict';

import * as actions from '../constants/actionTypes';

const navbar = (
  state = {
    isOpen: false,
  },
  action
) => {
  switch (action.type) {
    case actions.OPEN_NAVBAR:
      if (state.isOpen)
        return state;

      return {
        ...state,
        isOpen: true,
      };
    case actions.CLOSE_NAVBAR:
      if (!state.isOpen)
        return state;

      return {
        ...state,
        isOpen: false,
      };
    case actions.TOGGLE_NAVBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
  }

  return state;
};

export default navbar;
