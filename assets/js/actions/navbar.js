'use strict';

export const showNavbar = () => {
  return {
    type: 'SHOW_NAVBAR',
  };
};

export const hideNavbar = () => {
  return {
    type: 'HIDE_NAVBAR',
  };
};

export const toggleNavbar = () => {
  return {
    type: 'TOGGLE_NAVBAR',
  };
};
