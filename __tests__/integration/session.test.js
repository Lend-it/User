const  request = require("supertest");

const App = require("../../src/app");

const Session = require("../../src/controllers/SessionController");

describe('Create session',() => {
  it('take the session data', async () => {
   const session = await Session.create({
    email: "rogerio@email.com", 
    username: "Rogério Júnior",
    password: "61982034567",
   });
  
   const response = await request(App)
    .post('/session')
    .send({
      email: session.email,
      password: "61982034567"
    });

    expect(response).toBe(200); 

  });
});
