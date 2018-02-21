'use strict';

import { fromJS } from 'immutable';
import { routerReducer } from 'react-router-redux';

const router = (...args) => fromJS(routerReducer(...args));

export default router;
