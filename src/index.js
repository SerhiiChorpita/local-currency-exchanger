const express = require('express');

const config = require('./config/app');
const routes = require('../src/app/routes/routes')

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { appPort } = config;

routes(app);

const server = app.listen(appPort, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port: ${server.address().port}`);
});