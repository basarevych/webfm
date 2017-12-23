'use strict';

const infos = (
  state = {},
  action
) => {
  switch (action.type) {
    case `SET_INFO`:
      return _.cloneDeep({
        ...state,
        [action.id]: action.info,
      });
    case `CLEAR_INFOS`:
      let newState = {};
      for (let key of Object.keys(state)) {
        if (action.keep.includes(key))
          newState[key] = _.cloneDeep(state[key]);
      }
      return newState;
  }

  return state;
};

export default infos;
