const dotenv = require('dotenv');
const app = require('./app.js');
require('./db/index.js');

dotenv.config();

const HOST = 'localhost';
const PORT = process.env.PORT || 3002;
app.listen(PORT);

console.log(`Running at ${HOST}:${PORT}`);
