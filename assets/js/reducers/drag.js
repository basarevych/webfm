import * as actions from '../constants/actionTypes';
import { fromJS } from 'immutable';

const drag = (
  state = fromJS({
    left: {
      isDragging: false,
      isSelected: false,
      dragMode: 'COPY',
    },
    right: {
      isDragging: false,
      isSelected: false,
      dragMode: 'COPY',
    },
  }),
  action
) => {
  switch (action.type) {
    case actions.UPDATE_DRAG_STATE:
      if (state.getIn([_.toLower(action.pane), 'isDragging']) === action.isDragging)
        return state;

      return state.withMutations(map => {
        map
          .setIn([_.toLower(action.pane), 'isDragging'], action.isDragging)
          .setIn([_.toLower(action.pane), 'isSelected'], action.isSelected);
      });
    case actions.UPDATE_DRAG_MODE:
      if (state.getIn(['left', 'isDragging']) && (['left', 'dragMode']) !== action.mode)
        return state.setIn(['left', 'dragMode'], action.mode);
      if (state.getIn(['right', 'isDragging']) && (['right', 'dragMode']) !== action.mode)
        return state.setIn(['right', 'dragMode'], action.mode);
      break;
  }

  return state;
};

export default drag;
