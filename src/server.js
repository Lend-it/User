const dotenv = require('dotenv');
const app = require('./app.js');
const Database = require('./db/index.js');

new Database(false);

dotenv.config();

const HOST = 'localhost';
const PORT = process.env.PORT || 3002;
app.listen(PORT);

console.log(`Running at ${HOST}:${PORT}`);
