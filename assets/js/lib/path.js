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
