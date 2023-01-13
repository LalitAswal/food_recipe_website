const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors())
app.use(express.json());


const food = require('./routes/food.routes');
app.use('/api/v1',
        food);


module.exports = app;