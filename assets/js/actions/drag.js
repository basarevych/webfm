'use strict';

import * as actions from '../constants/actionTypes';
import { fastCopy, fastMove } from './commands';

export const updateDragMode = mode => {
  return {
    type: actions.UPDATE_DRAG_MODE,
    mode,
  };
};

export const handleDrag = (fromPane, isDragging, isSelected) => {
  return {
    type: actions.UPDATE_DRAG_STATE,
    pane: fromPane,
    isDragging,
    isSelected,
  };
};

export const handleDrop = (fromPane, name, isSelected) => {
  return async (dispatch, getState) => {
    let state = getState();
    let mode = state.getIn(['drag', fromPane.toLowerCase(), 'dragMode']);

    let names = [];
    if (isSelected) {
      let pane = state.get(fromPane.toLowerCase() + 'Pane');
      let list = pane.get('list');
      for (let index of pane.get('selectedIndexes').toArray())
        names.push(list.getIn([index, 'name']));
    } else {
      names.push(name);
    }

    let promises = [];
    for (let name of names)
      promises.push(dispatch(mode === 'COPY' ? fastCopy(fromPane, name) : fastMove(fromPane, name)));
    return await Promise.all(promises);
  };
};
