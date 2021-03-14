import express from 'express';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const app = express();

app.get('/', async (req, res) => {
  const users = User.findAll();
  // res.send('yossfe');
  res.json(users);
});

const HOST = 'localhost';
const PORT = process.env.PORT || 3002;
app.listen(PORT);

console.log(`Running at ${HOST}:${PORT}`);
