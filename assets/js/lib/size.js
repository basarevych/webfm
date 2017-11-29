'use strict';

export function human(bytes) {
  let size = bytes;
  let units = 'B';
  if (bytes >= 1024 * 1024 * 1024 * 1024) {
    size = Math.round(100 * bytes / 1024 / 1024 / 1024 / 1024) / 100;
    units = 'TB';
  } else if (bytes >= 1024 * 1024 * 1024) {
      size = Math.round(100* bytes / 1024 / 1024 /1024) / 100;
      units = 'GB';
  } else if (bytes >= 1024 * 1024) {
      size = Math.round(100 * bytes / 1024 / 1024) / 100;
      units = 'MB';
  } else if (bytes >= 1024) {
    size = Math.round(100 * bytes / 1024) / 100;
    units = 'KB';
  }

  return `${size} ${units}`;
}
