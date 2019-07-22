const request = require('supertest');
const app = require('../app')

// =======================
// test root
// =======================
describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});


// =======================
// test hello
// =======================
describe('Test hello', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/hello').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

// =======================
// test user
// =======================
describe('Test users', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/v1/users').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

describe('Test user', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/v1/users/1').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

// =======================
// test shop
// =======================
describe('Test shops', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/v1/shops').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

describe('Test shop', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/v1/shops/1').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

describe('Test shop spaces', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/v1/shops/1/spaces').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

// =======================
// test space
// =======================
describe('Test spaces', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/v1/spaces').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

describe('Test shop', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/v1/spaces/1').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});