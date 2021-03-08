import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('yossfe');
});

const HOST = 'localhost';
const PORT = process.env.PORT || 3002;
app.listen(PORT);

console.log(`Running at ${HOST}:${PORT}`);
