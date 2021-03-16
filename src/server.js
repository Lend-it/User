import dotenv from 'dotenv';
import app from './app.js';
import './db/index.js';

dotenv.config();

const HOST = 'localhost';
const PORT = process.env.PORT || 3002;
app.listen(PORT);

console.log(`Running at ${HOST}:${PORT}`);
