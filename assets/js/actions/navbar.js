import * as actions from '../constants/actionTypes';

export const openNavbar = () => {
  return {
    type: actions.OPEN_NAVBAR,
  };
};

export const closeNavbar = () => {
  return {
    type: actions.CLOSE_NAVBAR,
  };
};

export const toggleNavbar = () => {
  return {
    type: actions.TOGGLE_NAVBAR,
  };
};
