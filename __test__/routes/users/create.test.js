const supertest = require('supertest');
const app = require('../../../app');
const mongo = require('../../../db');
const jwt = require('../../../utils/jwt');

describe('POST /api/users', () => {
  let req;
  let admintoken;
  let usertoken;
  beforeAll(async () => {
    admintoken = await jwt({
      username: 'Mock',
      locations: [1, 2],
      role: 'admin',
    });
    usertoken = await jwt({
      username: 'Mock',
      locations: [1, 2],
      role: 'user',
    });
    await mongo.connect();
    req = supertest(app.callback());
  });

  afterAll(async () => {
    await mongo.close();
  });
  it('should be unauthorized without jwt', async () => {
    const res = await req.post('/api/users');
    expect(res.statusCode).toBe(401);
  });

  it('should be unauthorized with user role', async () => {
    const res = await req
      .post('/api/users')
      .set('Authorization', `Bearer ${usertoken}`);
    expect(res.statusCode).toBe(401);
  });

  it('should throw validation error', async () => {
    const res = await req
      .post('/api/users')
      .set('Authorization', `Bearer ${admintoken}`);
    expect(res.statusCode).toBe(500);
  });
});
