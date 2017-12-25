'use strict';

import { push } from 'react-router-redux';
import { clearLists, setList } from './list';
import { loadContent } from './content';
import { loadInfo } from './info';
import { signOut } from './user';
import { matchLocation, join } from '../lib/path';

export const setActivePane = pane => {
  return async (dispatch, getState) => {
    let { user, leftPane, rightPane } = getState();
    if (pane === 'LEFT' && leftPane.isActive)
      return;
    if (pane === 'RIGHT' && rightPane.isActive)
      return;

    await dispatch({
      type: `DEACTIVATE_${pane === 'LEFT' ? 'RIGHT' : 'LEFT'}_PANE`,
    });
    await dispatch({
      type: `ACTIVATE_${pane}_PANE`,
    });

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
  return async dispatch => {
    if (mode === 'CONTENTS')
      dispatch(loadContent(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));
    else if (mode === 'INFO')
      dispatch(loadInfo(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));

    return dispatch({
      type: `SET_${pane}_PANE_MODE`,
      mode,
    });
  };
};

export const setPaneShare = (pane, share) => {
  return {
    type: `SET_${pane}_PANE_SHARE`,
    share,
  };
};

export const setPanePath = (pane, path, directory = '', name = '') => {
  return {
    type: `SET_${pane}_PANE_PATH`,
    path,
    directory,
    name,
  };
};

export const setPaneIndex = (pane, index) => {
  return async (dispatch, getState) => {
    let { leftPane, rightPane } = getState();

    let share;
    let path;
    let directory;
    let name;

    if (pane === 'LEFT') {
      if (leftPane.isActive)
        share = leftPane.share;

      if (index === -1) {
        if (leftPane.name !== '') {
          path = leftPane.directory === '/' ? '/' : leftPane.directory + '/';
          directory = leftPane.directory;
          name = '';
        }
      } else {
        let item = leftPane.list[index];
        if (item) {
          path = join(leftPane.directory, item.name);
          directory = leftPane.directory;
          name =  item.name;
        }
      }
    } else {
      if (rightPane.isActive)
        share = rightPane.share;

      if (index === -1) {
        if (rightPane.name !== '') {
          path = rightPane.directory === '/' ? '/' : rightPane.directory + '/';
          directory = rightPane.directory;
          name = '';
        }
      } else {
        let item = rightPane.list[index];
        if (item) {
          path = join(rightPane.directory, item.name);
          directory = rightPane.directory;
          name =  item.name;
        }
      }
    }

    if (path && directory && name) {
      await dispatch(setPanePath(pane, path, directory, name));
      if (share)
        await dispatch(push(`/~${share}:${path}`));
    }
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

    if (!share)
      share = (pane !== 'RIGHT' ? leftPane.share : rightPane.share);
    if (!path)
      path = (pane !== 'RIGHT' ? leftPane.path : rightPane.path);

    if (pane === 'LEFT' && leftPane.share === share && leftPane.path === path)
      return;
    if (pane === 'RIGHT' && rightPane.share === share && rightPane.path === path)
      return;
    if (pane === 'BOTH' && leftPane.share === rightPane.share === share && leftPane.path === rightPane.path === path)
      return;

    let params = {
      share,
      path,
      _csrf: app.csrf,
    };

    let start = Date.now();
    if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.timestamp < start)
      await dispatch(startLoadingPane('LEFT', start));
    if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.timestamp < start)
      await dispatch(startLoadingPane('RIGHT', start));

    return new Promise(resolve => {
      io.socket.post('/pane/cd', params, async (data, response) => {
        let finish = Date.now();
        if (response.statusCode !== 200) {
          await dispatch(stopLoadingPane('LEFT'), finish);
          await dispatch(stopLoadingPane('RIGHT'), finish);
          await dispatch(signOut());
          return resolve();
        }

        let { leftPane, rightPane } = getState();

        if (data.success) {
          let activePaneChanged = false;
          await dispatch(setList(`${data.share}:${data.directory}`, data.list));
          if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.timestamp === start) {
            await dispatch(setPaneShare('LEFT', data.share));
            await dispatch(setPanePath('LEFT', data.path, data.directory, data.name));
            await dispatch(paneDeselect('LEFT'));
            await dispatch(paneSort('LEFT'));
            await dispatch(paneSelect('LEFT'));
            await dispatch(stopLoadingPane('LEFT', finish));
            if (leftPane.isActive)
              activePaneChanged = true;
          }
          if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.timestamp === start) {
            await dispatch(setPaneShare('RIGHT', data.share));
            await dispatch(setPanePath('RIGHT', data.path, data.directory, data.name));
            await dispatch(paneDeselect('RIGHT'));
            await dispatch(paneSort('RIGHT'));
            await dispatch(paneSelect('RIGHT'));
            await dispatch(stopLoadingPane('RIGHT', finish));
            if (rightPane.isActive)
              activePaneChanged = true;
          }
          await dispatch(clearLists());
          if (activePaneChanged)
            await dispatch(push(`/~${data.share}:${data.path}`));
        } else {
          let activePaneChanged = false;
          if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.timestamp === start) {
            await dispatch(setPaneShare('LEFT', share));
            await dispatch(setPanePath('LEFT', path));
            await dispatch(paneDeselect('LEFT'));
            await dispatch(paneSort('LEFT'));
            await dispatch(stopLoadingPane('LEFT', finish, true));
            if (leftPane.isActive)
              activePaneChanged = true;
          }
          if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.timestamp === start) {
            await dispatch(setPaneShare('RIGHT', share));
            await dispatch(setPanePath('RIGHT', path));
            await dispatch(paneDeselect('RIGHT'));
            await dispatch(paneSort('RIGHT'));
            await dispatch(stopLoadingPane('RIGHT', finish, true));
            if (rightPane.isActive)
              activePaneChanged = true;
          }
          if (activePaneChanged)
            await dispatch(push(`/~${share}:${path}`));
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
    if (pane === 'LEFT' && state.leftPane.share && state.leftPane.directory)
      id = `${state.leftPane.share}:${state.leftPane.directory}`;
    else if (pane === 'RIGHT' && state.rightPane.share && state.rightPane.directory)
      id = `${state.rightPane.share}:${state.rightPane.directory}`;

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

    if (!id) {
      return dispatch({
        type: `SET_${pane}_PANE_LIST`,
        list: [],
        selectedIndexes: [],
      });
    }

    let selectedIds = [];
    let sorted = (pane === 'LEFT' ? state.leftPane.list : state.rightPane.list);
    let selected = (pane === 'LEFT' ? state.leftPane.selectedIndexes : state.rightPane.selectedIndexes);
    for (let i = 0; i < sorted.length; i++) {
      if (selected.includes(i))
        selectedIds.push(sorted[i].id);
    }

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

    let list = directories.concat(files);

    let selectedIndexes = [];
    if (selectedIds.length) {
      for (let i = 0; i < list.length; i++) {
        if (selectedIds.includes(list[i].id))
          selectedIndexes.push(i);
      }
    }

    dispatch({
      type: `SET_${pane}_PANE_LIST`,
      list,
      selectedIndexes,
    });
  };
};

export const paneDeselect = (pane) => {
  return {
    type: `SET_${pane}_PANE_SELECTION`,
    selectedIndexes: [],
  };
};

export const paneSelect = (pane, index) => {
  return async (dispatch, getState) => {
    let { leftPane, rightPane } = getState();

    if (_.isUndefined(index)) {
      let list = (pane === 'LEFT' ? leftPane.list : rightPane.list);
      index = -1;
      for (let i = 0; i < list.length; i++) {
        if (list[i].name === (pane === 'LEFT' ? leftPane.name : rightPane.name)) {
          index = i;
          break;
        }
      }
    } else {
      await dispatch(setPaneIndex(pane, index));
    }

    dispatch({
      type: `SET_${pane}_PANE_SELECTION`,
      selectedIndexes: index === -1 ? [] : [index],
    });

    if (index === -1)
      return;

    if ((pane === 'LEFT' && rightPane.mode === 'CONTENTS') ||
      (pane === 'RIGHT' && leftPane.mode === 'CONTENTS'))
      dispatch(loadContent(pane));
    if ((pane === 'LEFT' && rightPane.mode === 'INFO') ||
      (pane === 'RIGHT' && leftPane.mode === 'INFO'))
      dispatch(loadInfo(pane));
  };
};

export const paneSelectRange = (pane, index) => {
  return async (dispatch, getState) => {
    let { leftPane, rightPane } = getState();
    let selectedIndexes = (pane === 'LEFT' ? leftPane.selectedIndexes.slice() : rightPane.selectedIndexes.slice());
    let length = (pane === 'LEFT' ? leftPane.list.length : rightPane.list.length);

    let min = -1;
    let max = -1;
    let prev = -1;
    for (let i = index - 1; i >= 0; i--) {
      if (selectedIndexes.includes(i)) {
        prev = i;
        break;
      }
    }
    if (prev === -1) {
      let next = -1;
      for (let i = index + 1; i < length; i++) {
        if (selectedIndexes.includes(i)) {
          next = i;
          break;
        }
      }
      if (next !== -1) {
        min = index;
        max = next - 1;
      }
    } else {
      min = prev + 1;
      max = index;
    }

    if (min !== -1 && max !== -1) {
      for (let i = min; i <= max; i++)
        selectedIndexes.push(i);

      dispatch({
        type: `SET_${pane}_PANE_SELECTION`,
        selectedIndexes,
      });

      await dispatch(setPaneIndex(pane, index));

      if ((pane === 'LEFT' && rightPane.mode === 'CONTENTS') ||
        (pane === 'RIGHT' && leftPane.mode === 'CONTENTS'))
        dispatch(loadContent(pane));
      if ((pane === 'LEFT' && rightPane.mode === 'INFO') ||
        (pane === 'RIGHT' && leftPane.mode === 'INFO'))
        dispatch(loadInfo(pane));
    }
  };
};

export const paneToggleSelect = (pane, index) => {
  return async (dispatch, getState) => {
    let { leftPane, rightPane } = getState();
    let selectedIndexes = (pane === 'LEFT' ? leftPane.selectedIndexes.slice() : rightPane.selectedIndexes.slice());

    let indexOfIndex = selectedIndexes.indexOf(index);
    if (indexOfIndex === -1) {
      selectedIndexes.push(index);
      await dispatch(setPaneIndex(pane, index));
    } else {
      selectedIndexes.splice(indexOfIndex, 1);
      await dispatch(setPaneIndex(pane, -1));
    }

    dispatch({
      type: `SET_${pane}_PANE_SELECTION`,
      selectedIndexes,
    });

    if ((pane === 'LEFT' && rightPane.mode === 'CONTENTS') ||
      (pane === 'RIGHT' && leftPane.mode === 'CONTENTS'))
      dispatch(loadContent(pane));
    if ((pane === 'LEFT' && rightPane.mode === 'INFO') ||
      (pane === 'RIGHT' && leftPane.mode === 'INFO'))
      dispatch(loadInfo(pane));
  };
};
