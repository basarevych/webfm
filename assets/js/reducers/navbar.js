'use strict';

const navbar = (
  state = {
    isOpen: false,
  },
  action
) => {
  switch (action.type) {
    case 'SHOW_NAVBAR':
      return Object.assign(
        {},
        state,
        {
          isOpen: true,
        }
      );
    case 'HIDE_NAVBAR':
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
