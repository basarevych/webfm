'use strict';

const paneListFactory = which => {
  return (
    state = [],
    action
  ) => {
    switch (action.type) {
      case `SET_${which}_PANE_LIST`:
        return _.isEqual(state, action.list) ? state : action.list.slice();
    }

    return state;
  };
};

export default paneListFactory;
