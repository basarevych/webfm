'use strict';

export const setActivePane = pane => {
  return async dispatch => {
    await dispatch({
      type: `DEACTIVATE_${pane === 'LEFT' ? 'RIGHT' : 'LEFT'}_PANE`,
    });
    await dispatch({
      type: `ACTIVATE_${pane}_PANE`,
    });
  };
};

export const showPane = pane => {
  return {
    type: `SHOW_${pane}_PANE`,
  };
};

export const hidePane = pane => {
  return {
    type: `HIDE_${pane}_PANE`,
  };
};

export const togglePane = pane => {
  return async (dispatch, getState) => {
    let { leftPane, rightPane } = getState();
    let isVisible = (pane === 'LEFT' ? leftPane.isVisible : rightPane.isVisible);
    return dispatch({
      type: `${isVisible ? 'HIDE' : 'SHOW'}_${pane}_PANE`,
    });
  };
};

export const setPaneMode = (pane, mode) => {
  return async dispatch => {
    return dispatch({
      type: `SET_${pane}_PANE_MODE`,
      mode: mode,
    });
  };
};
