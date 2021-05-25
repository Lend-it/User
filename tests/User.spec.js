const request = require('supertest');
const Database = require('../src/db/index.js');
const app = require('../src/app');
const dotenv = require('dotenv');
const path = require('path');

describe('User tests', () => {
  beforeAll(async () => {
    new Database(true);
    dotenv.config();
  });

  it('Should be able to create a new user', async () => {
    const user = {
      useremail: 'existUser@gmail.com',
      name: 'Dora Mills',
      whatsappnumber: '61999332223',
      password: '446253',
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
      useremail: 'existUser@gmail.com',
      name: 'Dora Mills',
      whatsappnumber: '61999332223',
      password: '446253',
      latitude: 0,
      longitude: 0,
    };

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(400);
  });

  it('Should be able to show an user', async () => {
    const response = await request(app).get('/users/existUser@gmail.com');

    expect(response.status).toBe(200);
  });

  it('Should not be able to show an non-existing user', async () => {
    const response = await request(app).get('/users/sigkofej@gmail.com');

    expect(response.status).toBe(400);
  });

  it('Should be able to list the users', async () => {
    const response = await request(app)
      .get('/users')
      .query({
        requestUsers: 'existUser@gmail.com',
      });

    expect(response.status).toBe(200);
  });

  it('Should be able to update an user', async () => {
    const user = {
      useremail: 'existUser@gmail.com',
      name: 'Violet Hughes',
      whatsappnumber: '61999332223',
    };

    const response = await request(app)
      .put('/users')
      .send(user);

    expect(response.status).toBe(200);
  });

  it('Should not be able to update an non-existing user', async () => {
    const user = {
      useremail: 'nomoccu@gmail.com',
      name: 'Seth Meyer',
      whatsappnumber: '61999332223',
    };

    const response = await request(app)
      .put('/users')
      .send(user);

    expect(response.status).toBe(404);
  });

  it('Should be able to update the location of a user', async () => {
    const user = {
      useremail: 'existUser@gmail.com',
      latitude: 5,
      longitude: 5,
    };

    const response = await request(app)
      .patch('/users/location')
      .send(user);

    expect(response.status).toBe(200);
  });

  it('Should not be able to update the location of a non-existing user', async () => {
    const user = {
      useremail: 'wow@gmail.com',
      latitude: 5,
      longitude: 5,
    };

    const response = await request(app)
      .patch('/users/location')
      .send(user);

    expect(response.status).toBe(404);
  });

  it('Should be able to update the avatar of a user', async () => {
    const user = {
      useremail: 'existUser@gmail.com',
    };

    const response = await request(app)
      .patch('/users/avatar')
      .field('useremail', user.useremail)
      .attach('avatar', path.resolve(__dirname, './test.png'));

    expect(response.status).toBe(200);
  });

  it('Should not be able to update the avatar of a non-existing user', async () => {
    const user = {
      useremail: 'non-exinst@gmail.com',
    };

    const response = await request(app)
      .patch('/users/avatar')
      .field('useremail', user.useremail)
      .attach('avatar', path.resolve(__dirname, './test.png'));

    expect(response.status).toBe(404);
  });
});
