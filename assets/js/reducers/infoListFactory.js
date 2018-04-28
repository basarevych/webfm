'use strict';

import * as actions from '../constants/actionTypes';
import { Map, fromJS } from 'immutable';

const infoListFactory = type => {
  let setAction;
  let clearAction;
  switch (type) {
    case 'LIST':
      setAction = actions.SET_LIST;
      clearAction = actions.CLEAR_LIST;
      break;
    case 'CONTENT':
      setAction = actions.SET_CONTENT;
      clearAction = actions.CLEAR_CONTENT;
      break;
    case 'INFO':
      setAction = actions.SET_INFO;
      clearAction = actions.CLEAR_INFO;
      break;
    case 'SIZE':
      setAction = actions.SET_SIZE;
      clearAction = actions.CLEAR_SIZE;
      break;
    default:
      throw new Error('Unknown list type');
  }

  return (state = Map({}), action) => {
    switch (action.type) {
      case setAction:
        return state.set(action.id, fromJS(action[_.toLower(type)]));
      case clearAction:
        return state.filter((value, key) => _.includes(action.keep, key));
    }

    return state;
  };
};

export default infoListFactory;
