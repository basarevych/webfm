'use strict';

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const routing = (
  state = fromJS({
    location: null
  }),
  action
) => {
  if (action.type === LOCATION_CHANGE)
    return state.merge(fromJS({ location: action.payload }));

  return state;
};

export default routing;
