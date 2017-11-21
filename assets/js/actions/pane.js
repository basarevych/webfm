'use strict';

export const setActivePane = (pane) => {
  return dispatch => {
    dispatch({
      type: `DEACTIVATE_${pane === 'LEFT' ? 'RIGHT' : 'LEFT'}_PANE`,
    });
    dispatch({
      type: `ACTIVATE_${pane}_PANE`,
    });
  };
};

export const toggleRightPane = () => {
  return (dispatch, getState) => {
    let { rightPane } = getState();
    dispatch({
      type: `${rightPane.isVisible ? 'HIDE' : 'SHOW'}_RIGHT_PANE`,
    });
  };
};
