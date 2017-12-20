'use strict';

const paneContentsFactory = which => {
  return (
    state = {},
    action
  ) => {
    switch (action.type) {
      case `SET_${which}_PANE_CONTENTS`:
        return state;
    }

    return state;
  };
};

export default paneContentsFactory;
