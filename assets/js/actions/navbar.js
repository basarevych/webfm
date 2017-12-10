'use strict';

export const openNavbar = () => {
  return {
    type: 'OPEN_NAVBAR',
  };
};

export const closeNavbar = () => {
  return {
    type: 'CLOSE_NAVBAR',
  };
};

export const toggleNavbar = () => {
  return {
    type: 'TOGGLE_NAVBAR',
  };
};
