'use strict';

const paneContentsFactory = which => {
  return (
    state = {},
    action
  ) => {
    switch (action.type) {
      case `SET_${which}_PANE_CONTENTS`:
        return _.isEqual(state, action.contents) ? state : Object.assign({}, action.contents);
    }

    return state;
  };
};

export default paneContentsFactory;
