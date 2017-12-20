'use strict';

const lists = (
  state = {},
  action
) => {
  switch (action.type) {
    case `SET_LIST`:
      return _.cloneDeep({
        ...state,
        [action.id]: action.list,
      });
    case `CLEAR_LISTS`:
      let newState = {};
      for (let key of Object.keys(state)) {
        if (action.keep.includes(key))
          newState[key] = _.cloneDeep(state[key]);
      }
      return newState;
  }

  return state;
};

export default lists;
