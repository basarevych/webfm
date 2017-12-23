'use strict';

const contents = (
  state = {},
  action
) => {
  switch (action.type) {
    case `SET_CONTENT`:
      return _.cloneDeep({
        ...state,
        [action.id]: action.content,
      });
    case `CLEAR_CONTENTS`:
      let newState = {};
      for (let key of Object.keys(state)) {
        if (action.keep.includes(key))
          newState[key] = _.cloneDeep(state[key]);
      }
      return newState;
  }

  return state;
};

export default contents;
