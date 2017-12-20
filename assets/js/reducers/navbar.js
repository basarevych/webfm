'use strict';

const navbar = (
  state = {
    isOpen: false,
  },
  action
) => {
  switch (action.type) {
    case 'OPEN_NAVBAR':
      if (state.isOpen)
        return state;

      return {
        ...state,
        isOpen: true,
      };
    case 'CLOSE_NAVBAR':
      if (!state.isOpen)
        return state;

      return {
        ...state,
        isOpen: false,
      };
    case 'TOGGLE_NAVBAR':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
  }

  return state;
};

export default navbar;
