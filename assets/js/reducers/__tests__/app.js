'use strict';

import { Map } from 'immutable';
import * as actions from '../../constants/actionTypes';
import app from '../app';

describe('app reducer', () => {

  it('SET_CSRF_TOKEN succeeds', () => {
    let state = Map({});
    let action = {
      type: actions.SET_CSRF_TOKEN,
      token: 'abc',
    };

    let results = app(state, action).toJS();

    expect(results)
      .toEqual({
        csrf: 'abc',
      });
  });

});
