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

      return Object.assign(
        {},
        state,
        {
          isOpen: true,
        }
      );
    case 'CLOSE_NAVBAR':
      if (!state.isOpen)
        return state;

      return Object.assign(
        {},
        state,
        {
          isOpen: false,
        }
      );
    case 'TOGGLE_NAVBAR':
      return Object.assign(
        {},
        state,
        {
          isOpen: !state.isOpen,
        }
      );
  }

  return state;
};

export default navbar;
