'use strict';

const infoListFactory = type => {
  return (state = {}, action) => {
    switch (action.type) {
      case `SET_${type.toUpperCase()}`:
        return _.cloneDeep({
          ...state,
          [action.id]: action[type],
        });
      case `CLEAR_${type.toUpperCase()}`:
        let newState = {};
        for (let key of Object.keys(state)) {
          if (action.keep.includes(key))
            newState[key] = _.cloneDeep(state[key]);
        }
        return newState;
    }

    return state;
  };
};

export default infoListFactory;
