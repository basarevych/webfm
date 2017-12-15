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
