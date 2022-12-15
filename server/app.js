const express = require('express');
const app = express();
const port = 3001;
const CarRouter = require('./routes/car-routes');

const db = [];

// set up first route
app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.use('/api', CarRouter)

// listening 
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

