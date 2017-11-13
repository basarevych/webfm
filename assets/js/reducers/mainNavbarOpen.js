'use strict';

const mainNavbarOpen = (state = false, action) => {
  switch (action.type) {
    case 'SET_MAIN_NAVBAR_OPEN':
      return action.open;
    case 'TOGGLE_MAIN_NAVBAR_OPEN':
      return !state;
  }
  return state;
};

export default mainNavbarOpen;
