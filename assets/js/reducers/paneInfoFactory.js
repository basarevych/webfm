'use strict';

const paneInfoFactory = which => {
  return (
    state = {},
    action
  ) => {
    switch (action.type) {
      case `SET_${which}_PANE_INFO`:
        return state;
    }

    return state;
  };
};

export default paneInfoFactory;
