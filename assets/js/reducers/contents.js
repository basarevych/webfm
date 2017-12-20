'use strict';

const contents = (
  state = {},
  action
) => {
  switch (action.type) {
    case `SET_CONTENT`:
      return _.cloneDeep({
        ...state,
        [action.id]: action.content,
      });
    case `CLEAR_CONTENTS`:
      return state;
  }

  return state;
};

export default contents;
