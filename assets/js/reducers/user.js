import * as actions from '../constants/actionTypes';
import { fromJS } from 'immutable';

const user = (
  state = fromJS({
    isAuthorized: false,
    login: 'anonymous',
    locale: 'en',
    shares: [],
  }),
  action
) => {
  switch (action.type) {
    case actions.SET_USER:
      return state.withMutations(map => {
        map
          .set('isAuthorized', action.isAuthorized || false)
          .set('login', action.login || 'anonymous')
          .set('locale', action.locale || state.get('locale'))
          .set('shares', fromJS(action.shares || []));
      });
  }

  return state;
};

export default user;
