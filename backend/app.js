const express = require('express');
const app = express();
const http = require('http');
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/routes');
const { connectDb } = require('./src/utils/mongoose');

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(cors()); 

app.use(router);

const port = process.env.PORT || 8000;

const server = app.listen(port, async () => {
	console.log(`Server is running at ${port}`);

    await connectDb();
});

module.exports = app;
