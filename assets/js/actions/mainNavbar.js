'use strict';

export const showMainNavbar = () => {
  return {
    type: 'SET_MAIN_NAVBAR_OPEN',
    open: true,
  };
};

export const hideMainNavbar = () => {
  return {
    type: 'SET_MAIN_NAVBAR_OPEN',
    open: false,
  };
};

export const toggleMainNavbar = () => {
  return {
    type: 'TOGGLE_MAIN_NAVBAR_OPEN',
  };
};

