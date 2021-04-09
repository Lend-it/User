const  request = require("supertest");

const App = require("../../src/app");

const User = require("../../src/controllers/UserController");

describe('Create user',() => {
  it('take the user data', async () => {
   const user = await User.create({
    useremail: "matheus@gmail.com",
    name: "matheus",
    whatsappnumber: "61616611",
    password: "1234567",
    latitude: -123321.2,
    longitude: -12321.2,
   });
  
   const response = await request(App)
    .post('/session')
    .send({
      email: user.email,
      password: "61982034567"
    });

    expect(response).toBe(200);

  });
});
