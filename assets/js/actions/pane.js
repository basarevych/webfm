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
    dispatch(isVisible ? hidePane(pane) : showPane(pane));
    if (isVisible)
      dispatch(setActivePane(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));
  };
};

export const setPaneMode = (pane, mode) => {
  return {
    type: `SET_${pane}_PANE_MODE`,
    mode,
  };
};

export const setPaneShare = (pane, share) => {
  return {
    type: `SET_${pane}_PANE_SHARE`,
    share,
  };
};

export const setPanePath = (pane, path) => {
  return {
    type: `SET_${pane}_PANE_PATH`,
    path,
  };
};

export const setPaneList = (pane, list) => {
  return {
    type: `SET_${pane}_PANE_LIST`,
    list,
  };
};
