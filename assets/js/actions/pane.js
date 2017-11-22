'use strict';

export const setActivePane = (pane) => {
  return async dispatch => {
    await dispatch({
      type: `DEACTIVATE_${pane === 'LEFT' ? 'RIGHT' : 'LEFT'}_PANE`,
    });
    await dispatch({
      type: `ACTIVATE_${pane}_PANE`,
    });
  };
};

export const showRightPane = () => {
  return {
    type: 'SHOW_RIGHT_PANE',
  };
};

export const hideRightPane = () => {
  return {
    type: 'HIDE_RIGHT_PANE',
  };
};

export const toggleRightPane = () => {
  return async (dispatch, getState) => {
    let { rightPane } = getState();
    return dispatch({
      type: `${rightPane.isVisible ? 'HIDE' : 'SHOW'}_RIGHT_PANE`,
    });
  };
};
