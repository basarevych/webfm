'use strict';

export function join(...args) {
  return args.reduce(
    (prev, cur) => {
      if (prev.length && prev[prev.length - 1] !== '/' && (!cur.length || cur[0] !== '/'))
        prev += '/';
      return prev + cur;
    },
    ''
  );
}

export function matchLocation(location) {
  let match = /^\/~([^:]+):(.+)$/.exec(location);
  if (!match)
    return null;

  return {
    share: match[1],
    path: match[2],
  };
}

export function splitPath(path) {
  let parts = path.split('/').filter(i => i.length);
  if (path.endsWith('/'))
    return { directory: '/' + parts.join('/'), name: '' };

  let name = parts.pop() || '';
  return { directory: '/' + parts.join('/'), name };
}
