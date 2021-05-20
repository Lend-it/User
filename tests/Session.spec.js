const request = require('supertest');
const Database = require('../src/db/index.js');
const app = require('../src/app');
const dotenv = require('dotenv');

describe('User tests', () => {
  beforeAll(async () => {
    new Database(true);
    dotenv.config();
  });

  it('Should be able to create a session', async () => {
    const user = {
      useremail: 'test6@email.com',
      name: 'Harvey Moody',
      whatsappnumber: '55620677557',
      password: '053488',
      latitude: 0,
      longitude: 0,
    };

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/session')
      .send({
        password: user.password,
        useremail: user.useremail,
      });

    expect(response.status).toBe(201);
  });

  it('Should not be able to create a session with an non existing user', async () => {
    const user = {
      useremail: 'test7@email.com',
      name: 'Harvey Moody',
      whatsappnumber: '55620677557',
      password: '053488',
      latitude: 0,
      longitude: 0,
    };

    const response = await request(app)
      .post('/session')
      .send({
        password: user.password,
        useremail: user.useremail,
      });

    expect(response.status).toBe(404);
  });
});
