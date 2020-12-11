'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const options = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGOOSE_URI, options);

const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const flowerRoute = require('./routes/flowers-routes');
// const babyAnimalRoute = require('./routes/babyAnimals-routes');

app.use(express.json());
app.use(logger);
app.use(flowerRoute);
// app.use(babyAnimalRoute);

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use(errorHandler);
app.use('*', notFoundHandler);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('I am connected');
});

module.exports = {
  server: app,
  start: port => {
    if(!port) { throw new Error('missing port');}
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  },
};