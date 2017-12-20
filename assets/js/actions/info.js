'use strict';

export const setInfo = (id, info) => {
  return {
    type: `SET_INFO`,
    id,
    info,
  };
};

export const clearInfos = () => {
  return {
    type: `CLEAR_INFOS`,
  };
};
