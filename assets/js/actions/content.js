'use strict';

export const setContent = (id, content) => {
  return {
    type: `SET_CONTENT`,
    id,
    content,
  };
};

export const clearContents = () => {
  return {
    type: `CLEAR_CONTENTS`,
  };
};
