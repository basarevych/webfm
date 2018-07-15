export function human(bytes) {
  let size = bytes;
  let suffix = 'B';
  let units = ['KB', 'MB', 'GB', 'TB'];
  let min = 1;
  for (let i = 0; i < units.length; i++) {
    min *= 1024;
    if (bytes >= min) {
      size = bytes / min;
      suffix = units[i];
    } else {
      break;
    }
  }

  return `${Math.round(100 * size) / 100} ${suffix}`;
}
