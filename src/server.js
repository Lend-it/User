import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('yossfe')
})

const HOST = 'localhost';
const PORT = process.env.PORT || 3001;
app.listen(PORT);

console.log(`Running at ${HOST}:${PORT}`);

