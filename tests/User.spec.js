const request = require('supertest');
const app = require('../src/app');

describe('User tests', () => {
  it('Should be able to create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        useremail: 'test@email.com',
        name: 'Harvey Moody',
        whatsappnumber: '55620677557',
        password: '053488',
        latitude: 0,
        longitude: 0,
      });

    expect(response.status).toBe(201);
  });
});
