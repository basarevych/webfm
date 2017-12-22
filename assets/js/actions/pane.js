'use strict';

import { push } from 'react-router-redux';
import { clearLists, setList } from './list';
import { signOut } from './user';
import { matchLocation } from '../lib/path';

export const setActivePane = pane => {
  return async (dispatch, getState) => {
    await dispatch({
      type: `DEACTIVATE_${pane === 'LEFT' ? 'RIGHT' : 'LEFT'}_PANE`,
    });
    await dispatch({
      type: `ACTIVATE_${pane}_PANE`,
    });

    let { user, leftPane, rightPane } = getState();
    let share = (pane === 'LEFT' ? leftPane.share : rightPane.share);
    let path = (pane === 'LEFT' ? leftPane.path : rightPane.path);
    if (user.isAuthorized)
      await dispatch(push(`/~${share}:${path}`));
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

export const startLoadingPane = (pane, timestamp) => {
  return {
    type: `START_${pane}_PANE_LOADING`,
    timestamp,
  };
};

export const stopLoadingPane = (pane, timestamp, isForbidden = false) => {
  return {
    type: `STOP_${pane}_PANE_LOADING`,
    timestamp,
    isForbidden,
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

export const initPanes = () => {
  return async (dispatch, getState) => {
    let { user, router } = getState();
    if (!user.isAuthorized)
      return;

    let match = matchLocation(router.location.pathname);
    let share = match ? match.share : user.shares[0].name;
    let path = match ? match.path : '/';

    await dispatch(paneCD('BOTH', share, path));
  };
};

export const paneCD = (pane, share, path) => {
  return async (dispatch, getState) => {
    let { app, user, leftPane, rightPane } = getState();
    if (!user.isAuthorized)
      return;

    let start = Date.now();
    if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.timestamp < start)
      await dispatch(startLoadingPane('LEFT', start));
    if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.timestamp < start)
      await dispatch(startLoadingPane('RIGHT', start));

    if (!share)
      share = (pane !== 'RIGHT' ? leftPane.share : rightPane.share);
    if (!path)
      path = (pane !== 'RIGHT' ? leftPane.path : rightPane.path);

    let params = {
      share,
      path,
      _csrf: app.csrf,
    };

    return new Promise(resolve => {
      io.socket.post('/pane/cd', params, async (data, response) => {
        let finish = Date.now();
        let { leftPane, rightPane } = getState();

        if (response.statusCode === 403) {
          let activePaneChanged = false;
          await dispatch(setList(`${share}:${path}`, []));
          if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.timestamp === start) {
            await dispatch(setPaneShare('LEFT', share));
            await dispatch(setPanePath('LEFT', path));
            await dispatch(paneSort('LEFT'));
            await dispatch(stopLoadingPane('LEFT', finish, true));
            if (leftPane.isActive)
              activePaneChanged = true;
          }
          if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.timestamp === start) {
            await dispatch(setPaneShare('RIGHT', share));
            await dispatch(setPanePath('RIGHT', path));
            await dispatch(paneSort('RIGHT'));
            await dispatch(stopLoadingPane('RIGHT', finish, true));
            if (rightPane.isActive)
              activePaneChanged = true;
          }
          await dispatch(clearLists());
          if (activePaneChanged)
            await dispatch(push(`/~${share}:${path}`));
        } else if (response.statusCode === 200) {
          let activePaneChanged = false;
          await dispatch(setList(`${data.share}:${data.path}`, data.list));
          if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.timestamp === start) {
            await dispatch(setPaneShare('LEFT', data.share));
            await dispatch(setPanePath('LEFT', data.path));
            await dispatch(paneSort('LEFT'));
            await dispatch(stopLoadingPane('LEFT', finish));
            if (leftPane.isActive)
              activePaneChanged = true;
          }
          if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.timestamp === start) {
            await dispatch(setPaneShare('RIGHT', data.share));
            await dispatch(setPanePath('RIGHT', data.path));
            await dispatch(paneSort('RIGHT'));
            await dispatch(stopLoadingPane('RIGHT', finish));
            if (rightPane.isActive)
              activePaneChanged = true;
          }
          await dispatch(clearLists());
          if (activePaneChanged)
            await dispatch(push(`/~${data.share}:${data.path}`));
        } else {
          await dispatch(stopLoadingPane('LEFT'), finish);
          await dispatch(stopLoadingPane('RIGHT'), finish);
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};

export const paneSort = (pane, field, dir) => {
  return (dispatch, getState) => {
    let state = getState();

    let id;
    if (pane === 'LEFT' && state.leftPane.share && state.leftPane.path)
      id = `${state.leftPane.share}:${state.leftPane.path}`;
    else if (pane === 'RIGHT' && state.rightPane.share && state.rightPane.path)
      id = `${state.rightPane.share}:${state.rightPane.path}`;

    if (field && dir) {
      dispatch({
        type: `SET_${pane}_PANE_SORT`,
        field,
        dir,
      });
    } else {
      field = (pane === 'LEFT' ? state.leftPane.sortField : state.rightPane.sortField);
      dir = (pane === 'LEFT' ? state.leftPane.sortDir : state.rightPane.sortDir);
    }

    if (!id)
      return;

    let parent = null;
    let directories = [];
    let files = [];
    for (let item of state.lists[id] || []) {
      if (item.isDirectory) {
        if (item.name === '..')
          parent = item;
        else
          directories.push(item);
      } else {
        files.push(item);
      }
    }

    let sort;
    if (field === 'NAME')
      sort = (a, b) => (dir === 'ASC' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    else
      sort = (a, b) => (dir === 'ASC' ? a.size - b.size : b.size - a.size);

    directories.sort(sort);
    files.sort(sort);

    if (parent)
      directories.unshift(parent);

    dispatch({
      type: `SET_${pane}_PANE_LIST`,
      list: directories.concat(files),
    });
  };
};
