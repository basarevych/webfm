export function join(...args) {
  return _.reduce(
    args,
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
  let parts = _.filter(_.split(path, '/'), i => !!i.length);
  if (_.endsWith(path, '/'))
    return { directory: '/' + parts.join('/'), name: '' };

  let name = parts.pop() || '';
  return { directory: '/' + parts.join('/'), name };
}
