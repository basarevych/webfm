'use strict';

import * as actions from '../constants/actionTypes';

const infoListFactory = type => {
  let setAction;
  let clearAction;
  switch (type) {
    case 'list':
      setAction = actions.SET_LIST;
      clearAction = actions.CLEAR_LIST;
      break;
    case 'content':
      setAction = actions.SET_CONTENT;
      clearAction = actions.CLEAR_CONTENT;
      break;
    case 'info':
      setAction = actions.SET_INFO;
      clearAction = actions.CLEAR_INFO;
      break;
    case 'size':
      setAction = actions.SET_SIZE;
      clearAction = actions.CLEAR_SIZE;
      break;
    default:
      throw new Error('Unknown list type');
  }

  return (state = {}, action) => {
    switch (action.type) {
      case setAction:
        return _.cloneDeep({
          ...state,
          [action.id]: action[type],
        });
      case clearAction:
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
