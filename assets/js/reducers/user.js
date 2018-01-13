'use strict';

const user = (
  state = {
    isAuthorized: false,
    login: 'anonymous',
    locale: 'en',
    shares: [],
  },
  action
) => {
  switch (action.type) {
    case 'SET_USER':
      return _.cloneDeep({
        isAuthorized: action.isAuthorized || false,
        login: action.login || 'anonymous',
        locale: action.locale || state.locale,
        shares: action.shares || [],
      });
  }

  return state;
};

export default user;
