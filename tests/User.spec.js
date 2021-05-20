const request = require('supertest');
const Database = require('../src/db/index.js');
const app = require('../src/app');
const dotenv = require('dotenv');

describe('User tests', () => {
  beforeAll(async () => {
    const db = new Database(true);
    dotenv.config();
  });

  it('Should be able to create a new user', async () => {
    const user = {
      useremail: 'test@email.com',
      name: 'Harvey Moody',
      whatsappnumber: '55620677557',
      password: '053488',
      latitude: 0,
      longitude: 0,
    };

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(201);
  });

  it('Should not able to create an user that already exists', async () => {
    const user = {
      useremail: 'test@email.com',
      name: 'Harvey Moody',
      whatsappnumber: '55620677557',
      password: '053488',
      latitude: 0,
      longitude: 0,
    };

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(400);
  });

  it('Should be able to show an user', async () => {
    const response = await request(app).get('/users/test@email.com');

    expect(response.status).toBe(200);
  });

  it('Should not be able to show an non-existing user', async () => {
    const response = await request(app).get('/users/test2@email.com');

    expect(response.status).toBe(400);
  });

  it('Should be able to list the users', async () => {
    const response = await request(app)
      .get('/users')
      .query({
        requestUsers: 'test@email.com',
      });

    expect(response.status).toBe(200);
  });

  it('Should be able to update an user', async () => {
    const user = {
      useremail: 'test@email.com',
      name: 'test2',
      whatsappnumber: '61999332223',
    };

    const response = await request(app)
      .put('/users')
      .send(user);

    expect(response.status).toBe(200);
  });

  it('Should not be able to update an non-existing user', async () => {
    const user = {
      useremail: 'test3@email.com',
      name: 'test2',
      whatsappnumber: '61999332223',
    };

    const response = await request(app)
      .put('/users')
      .send(user);

    expect(response.status).toBe(404);
  });

  it('Should be able to update the location of a user', async () => {
    const user = {
      useremail: 'test@email.com',
      latitude: 5,
      longitude: 5,
    };

    const response = await request(app)
      .put('/users/location')
      .send(user);

    expect(response.status).toBe(200);
  });

  it('Should not be able to update the location of a non-existing user', async () => {
    const user = {
      useremail: 'test3@email.com',
      latitude: 5,
      longitude: 5,
    };

    const response = await request(app)
      .put('/users/location')
      .send(user);

    expect(response.status).toBe(404);
  });
});
