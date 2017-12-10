'use strict';

const paneInfoFactory = which => {
  return (
    state = {},
    action
  ) => {
    switch (action.type) {
      case `SET_${which}_PANE_INFO`:
        return _.isEqual(state, action.info) ? state : Object.assign({}, action.info);
    }

    return state;
  };
};

export default paneInfoFactory;
