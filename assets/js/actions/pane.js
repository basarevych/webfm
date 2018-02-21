'use strict';

import * as actions from '../constants/actionTypes';
import { push } from 'react-router-redux';
import { clearLists, setList } from './list';
import { loadContent } from './content';
import { loadInfo } from './info';
import { signOut } from './user';
import { matchLocation, join } from '../lib/path';

export const setActivePane = pane => {
  return async (dispatch, getState) => {
    let state = getState();
    let user = state.get('user');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (pane === 'LEFT' && leftPane.get('isActive'))
      return;
    if (pane === 'RIGHT' && rightPane.get('isActive'))
      return;

    await dispatch({
      type: pane === 'LEFT' ? actions.DEACTIVATE_RIGHT_PANE : actions.DEACTIVATE_LEFT_PANE,
    });
    await dispatch({
      type: pane === 'LEFT' ? actions.ACTIVATE_LEFT_PANE : actions.ACTIVATE_RIGHT_PANE,
    });

    let share = (pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'));
    let path = (pane === 'LEFT' ? leftPane.get('path') : rightPane.get('path'));
    if (user.get('isAuthorized'))
      await dispatch(push(`/~${share}:${path}`));
  };
};

export const showPane = pane => {
  return {
    type: pane === 'LEFT' ? actions.SHOW_LEFT_PANE : actions.SHOW_RIGHT_PANE,
  };
};

export const hidePane = pane => {
  return {
    type: pane === 'LEFT' ? actions.HIDE_LEFT_PANE : actions.HIDE_RIGHT_PANE,
  };
};

export const togglePane = pane => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let isVisible = (pane === 'LEFT' ? leftPane.get('isVisible') : rightPane.get('isVisible'));
    dispatch(isVisible ? hidePane(pane) : showPane(pane));
    if (isVisible)
      dispatch(setActivePane(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));
  };
};

export const startLoadingPane = (pane, timestamp) => {
  return {
    type: pane === 'LEFT' ? actions.START_LEFT_PANE_LOADING : actions.START_RIGHT_PANE_LOADING,
    timestamp,
  };
};

export const stopLoadingPane = (pane, timestamp, isForbidden = false) => {
  return {
    type: pane === 'LEFT' ? actions.STOP_LEFT_PANE_LOADING : actions.STOP_RIGHT_PANE_LOADING,
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
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_MODE : actions.SET_RIGHT_PANE_MODE,
      mode,
    });
  };
};

export const setPaneShare = (pane, share) => {
  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SHARE : actions.SET_RIGHT_PANE_SHARE,
    share,
  };
};

export const setPanePath = (pane, path, directory = '', name = '') => {
  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_PATH : actions.SET_RIGHT_PANE_PATH,
    path,
    directory,
    name,
  };
};

export const setPaneIndex = (pane, index) => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let share;
    let path;
    let directory;
    let name;

    if (pane === 'LEFT') {
      if (leftPane.get('isActive'))
        share = leftPane.get('share');

      if (index === -1) {
        if (leftPane.get('name')) {
          let dir = leftPane.get('directory');
          path = (dir === '/' ? '/' : dir + '/');
          directory = dir;
          name = '';
        }
      } else {
        let item = leftPane.getIn(['list', index]);
        if (item) {
          path = join(leftPane.get('directory'), item.get('name'));
          directory = leftPane.get('directory');
          name =  item.get('name');
        }
      }
    } else {
      if (rightPane.get('isActive'))
        share = rightPane.get('share');

      if (index === -1) {
        if (rightPane.get('name')) {
          let dir = rightPane.get('directory');
          path = (dir === '/' ? '/' : dir + '/');
          directory = dir;
          name = '';
        }
      } else {
        let item = rightPane.getIn(['list', index]);
        if (item) {
          path = join(rightPane.get('directory'), item.get('name'));
          directory = rightPane.get('directory');
          name =  item.get('name');
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

export const paneSort = (pane, field, dir) => {
  return (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let lists = state.get('lists');

    let id;
    if (pane === 'LEFT' && leftPane.get('share') && leftPane.get('directory'))
      id = `${leftPane.get('share')}:${leftPane.get('directory')}`;
    else if (pane === 'RIGHT' && rightPane.get('share') && rightPane.get('directory'))
      id = `${rightPane.get('share')}:${rightPane.get('directory')}`;

    if (field && dir) {
      dispatch({
        type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SORT : actions.SET_RIGHT_PANE_SORT,
        field,
        dir,
      });
    } else {
      field = (pane === 'LEFT' ? leftPane.get('sortField') : rightPane.get('sortField'));
      dir = (pane === 'LEFT' ? leftPane.get('sortDir') : rightPane.get('sortDir'));
    }

    if (!id) {
      return dispatch({
        type: pane === 'LEFT' ? actions.SET_LEFT_PANE_LIST : actions.SET_RIGHT_PANE_LIST,
        list: [],
        selectedIndexes: [],
      });
    }

    let selectedIds = [];
    let sorted = (pane === 'LEFT' ? leftPane.get('list') : rightPane.get('list'));
    let selected = (pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes'));
    for (let i = 0; i < sorted.size; i++) {
      if (selected.includes(i))
        selectedIds.push(sorted.getIn([i, 'id']));
    }

    let parent = null;
    let directories = [];
    let files = [];
    let i = 0;
    for (let item of lists.get(id) || []) {
      if (item.get('isDirectory')) {
        if (item.get('name') === '..')
          parent = item.toJS();
        else
          directories.push(item.toJS());
      } else {
        files.push(item.toJS());
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
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_LIST : actions.SET_RIGHT_PANE_LIST,
      list,
      selectedIndexes,
    });
  };
};

export const paneDeselect = pane => {
  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
    selectedIndexes: [],
  };
};

export const paneSelect = (pane, index) => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    if (_.isUndefined(index)) {
      let list = (pane === 'LEFT' ? leftPane.get('list') : rightPane.get('list'));
      index = -1;
      for (let i = 0; i < list.size; i++) {
        if (list.getIn([i, 'name']) === (pane === 'LEFT' ? leftPane.get('name') : rightPane.get('name'))) {
          index = i;
          break;
        }
      }
    } else {
      await dispatch(setPaneIndex(pane, index));
    }

    dispatch({
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
      selectedIndexes: index === -1 ? [] : [index],
    });

    if (index === -1)
      return;

    if ((pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS') ||
      (pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS'))
      dispatch(loadContent(pane));
    if ((pane === 'LEFT' && rightPane.get('mode') === 'INFO') ||
      (pane === 'RIGHT' && leftPane.get('mode') === 'INFO'))
      dispatch(loadInfo(pane));
  };
};

export const paneSelectRange = (pane, index) => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let selectedIndexes = (pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes'));
    let length = (pane === 'LEFT' ? leftPane.get('list').size : rightPane.get('list').size);

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
        type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
        selectedIndexes: selectedIndexes.toJS(),
      });

      await dispatch(setPaneIndex(pane, index));

      if ((pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS') ||
        (pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS'))
        dispatch(loadContent(pane));
      if ((pane === 'LEFT' && rightPane.get('mode') === 'INFO') ||
        (pane === 'RIGHT' && leftPane.get('mode') === 'INFO'))
        dispatch(loadInfo(pane));
    }
  };
};

export const paneToggleSelect = (pane, index) => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let selectedIndexes = (pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes'));

    let indexOfIndex = selectedIndexes.indexOf(index);
    if (indexOfIndex === -1) {
      selectedIndexes.push(index);
      await dispatch(setPaneIndex(pane, index));
    } else {
      selectedIndexes.splice(indexOfIndex, 1);
      await dispatch(setPaneIndex(pane, -1));
    }

    dispatch({
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
      selectedIndexes: selectedIndexes.toJS(),
    });

    if ((pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS') ||
      (pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS'))
      dispatch(loadContent(pane));
    if ((pane === 'LEFT' && rightPane.get('mode') === 'INFO') ||
      (pane === 'RIGHT' && leftPane.get('mode') === 'INFO'))
      dispatch(loadInfo(pane));
  };
};

export const paneUpdate = data => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let now = Date.now();
    await dispatch(setList(`${data.share}:${data.directory}`, data.list || []));

    let left = new Promise(async (resolve, reject) => {
      try {
        if (leftPane.get('share') === data.share && leftPane.get('directory') === data.directory) {
          await dispatch(paneDeselect('LEFT'));
          await dispatch(paneSort('LEFT'));

          if (leftPane.get('name')) {
            let found = false;
            for (let item of data.list || []) {
              if (item.name === leftPane.get('name')) {
                found = true;
                break;
              }
            }
            if (found) {
              await dispatch(paneSelect('LEFT'));
            } else {
              let newPath = data.directory === '/' ? '/' : data.directory + '/';
              await dispatch(setPanePath('LEFT', newPath, data.directory, ''));
              if (leftPane.get('isActive'))
                await dispatch(push(`/~${data.share}:${newPath}`));
            }
          }

          await dispatch(stopLoadingPane('LEFT', now, !data.list));
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });

    let right = new Promise(async (resolve, reject) => {
      try {
        if (rightPane.get('share') === data.share && rightPane.get('directory') === data.directory) {
          await dispatch(paneDeselect('RIGHT'));
          await dispatch(paneSort('RIGHT'));

          if (rightPane.get('name')) {
            let found = false;
            for (let item of data.list || []) {
              if (item.name === rightPane.get('name')) {
                found = true;
                break;
              }
            }
            if (found) {
              await dispatch(paneSelect('RIGHT'));
            } else {
              let newPath = data.directory === '/' ? '/' : data.directory + '/';
              await dispatch(setPanePath('RIGHT', newPath, data.directory, ''));
              if (rightPane.get('isActive'))
                await dispatch(push(`/~${data.share}:${newPath}`));
            }
          }

          await dispatch(stopLoadingPane('RIGHT', now, !data.list));
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });

    await Promise.all([left, right]);
    await dispatch(clearLists());
  };
};

export const paneCD = (pane, share, path) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let user = state.get('user');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (!user.get('isAuthorized'))
      return;

    if (!share)
      share = (pane !== 'RIGHT' ? leftPane.get('share') : rightPane.get('share'));
    if (!path)
      path = (pane !== 'RIGHT' ? leftPane.get('path') : rightPane.get('path'));

    if (pane === 'LEFT' && leftPane.get('share') === share && leftPane.get('path') === path)
      return;
    if (pane === 'RIGHT' && rightPane.get('share') === share && rightPane.get('path') === path)
      return;
    if (pane === 'BOTH' &&
        leftPane.get('share') === rightPane.get('share') === share &&
        leftPane.get('path') === rightPane.get('path') === path)
      return;

    let params = {
      pane,
      share,
      path,
      _csrf: app.get('csrf'),
    };

    let start = Date.now();
    if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.get('timestamp') < start)
      await dispatch(startLoadingPane('LEFT', start));
    if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.get('timestamp') < start)
      await dispatch(startLoadingPane('RIGHT', start));

    return new Promise((resolve, reject) => {
      io.socket.post('/pane/cd', params, async (data, response) => {
        try {
          let finish = Date.now();
          if (response.statusCode !== 200) {
            await dispatch(stopLoadingPane('LEFT'), finish);
            await dispatch(stopLoadingPane('RIGHT'), finish);
            await dispatch(signOut());
            return resolve();
          }

          let state = getState();
          let leftPane = state.get('leftPane');
          let rightPane = state.get('rightPane');

          if (data.success) {
            if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.get('timestamp') === start) {
              await dispatch(setPaneShare('LEFT', data.share));
              await dispatch(setPanePath('LEFT', data.path, data.directory, data.name));
              if (leftPane.get('isActive'))
                await dispatch(push(`/~${data.share}:${data.path}`));
            }

            if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.get('timestamp') === start) {
              await dispatch(setPaneShare('RIGHT', data.share));
              await dispatch(setPanePath('RIGHT', data.path, data.directory, data.name));
              if (rightPane.get('isActive'))
                await dispatch(push(`/~${data.share}:${data.path}`));
            }

            await dispatch(paneUpdate(data));
          } else {
            if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.get('timestamp') === start) {
              await dispatch(setPaneShare('LEFT', ''));
              await dispatch(setPanePath('LEFT', path));
              await dispatch(paneDeselect('LEFT'));
              await dispatch(paneSort('LEFT'));
              await dispatch(stopLoadingPane('LEFT', finish, true));
              if (leftPane.get('isActive'))
                await dispatch(push(`/~${share}:${path}`));
            }

            if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.get('timestamp') === start) {
              await dispatch(setPaneShare('RIGHT', ''));
              await dispatch(setPanePath('RIGHT', path));
              await dispatch(paneDeselect('RIGHT'));
              await dispatch(paneSort('RIGHT'));
              await dispatch(stopLoadingPane('RIGHT', finish, true));
              if (rightPane.get('isActive'))
                await dispatch(push(`/~${share}:${path}`));
            }
          }

          resolve();
        } catch (error) {
          reject (error);
        }
      });
    });
  };
};

export const initPanes = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let user = state.get('user');
    let router = state.get('router');
    if (!user.get('isAuthorized'))
      return;

    let match = matchLocation(router.getIn(['location', 'pathname']));
    let share = match ? match.share : user.getIn(['shares', 0, 'name']);
    let path = match ? match.path : '/';

    await dispatch(paneCD('BOTH', share, path));
  };
};
