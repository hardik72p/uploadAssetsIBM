const express = require('express');
const bodyParser = require('body-parser');
const fileRoutes=require('./src/routes/file.route');
const cors = require('cors');

const app = express();

//middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.json())

app.use('/private',fileRoutes);

module.exports = app;