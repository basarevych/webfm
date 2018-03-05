'use strict';

const sails = require('sails');
const supertest = require('supertest');
const crypto = require('crypto');

describe('auth/sign-in route', () => {

  let cookie;
  let csrf;

  beforeAll(done => {
    sails.lift(
      {
        hooks: { grunt: false },
        log: { level: 'warn' },
      },
      error => done(error)
    );
  });

  afterAll(done => {
    sails.lower(done);
  });

  beforeEach(() => {
    return supertest(sails.hooks.http.app)
      .get('/auth/csrf')
      .then(response => {
        cookie = response.headers['set-cookie'].reduce((prev, cur) => cur.includes('.sid') ? cur : prev);
        csrf = response.body._csrf;
      });
  });

  it('validates login', () => {
    return supertest(sails.hooks.http.app)
      .post('/auth/sign-in')
      .set('Cookie', [cookie])
      .send({ _csrf: csrf, _validate: 'login', login: '' })
      .then(response => {
        expect(response.statusCode)
          .toBe(200);
        expect(response.body.success)
          .toBe(false);
      });
  });

  it('validates password', () => {
    return supertest(sails.hooks.http.app)
      .post('/auth/sign-in')
      .set('Cookie', [cookie])
      .send({ _csrf: csrf, _validate: 'password', password: '' })
      .then(response => {
        expect(response.statusCode)
          .toBe(200);
        expect(response.body.success)
          .toBe(false);
      });
  });

  it('loggs in', () => {
    let password = crypto.createHash('sha256').update('def').digest('hex');
    User.findOne = jest.fn(async () => ({ password }));

    return supertest(sails.hooks.http.app)
      .post('/auth/sign-in')
      .set('Cookie', [cookie])
      .send({ _csrf: csrf, login: 'abc', password: 'def' })
      .then(response => {
        expect(response.statusCode)
          .toBe(200);
        expect(response.body.success)
          .toBe(true);
        expect(User.findOne)
          .toHaveBeenCalledWith({ login: 'abc' });
      });
  });

  it('compares the password', () => {
    User.findOne = jest.fn(async () => ({ password: 'foobar' }));

    return supertest(sails.hooks.http.app)
      .post('/auth/sign-in')
      .set('Cookie', [cookie])
      .send({ _csrf: csrf, login: 'abc', password: 'def' })
      .then(response => {
        expect(response.statusCode)
          .toBe(200);
        expect(response.body.success)
          .toBe(false);
      });
  });

});
