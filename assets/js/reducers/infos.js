'use strict';

const infos = (
  state = {},
  action
) => {
  switch (action.type) {
    case `SET_INFO`:
      return _.cloneDeep({
        ...state,
        [action.id]: action.info,
      });
    case `CLEAR_INFOS`:
      return state;
  }

  return state;
};

export default infos;
