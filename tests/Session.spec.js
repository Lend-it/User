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
      useremail: 'uhokuuzi@gmail.com',
      name: 'Josie Beck',
      whatsappnumber: '61999332223',
      password: '327667',
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
      useremail: 'fog@gmail.com',
      name: 'Jeanette McCormick',
      whatsappnumber: '61999332223',
      password: '458016',
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
