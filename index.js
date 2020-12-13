'use strict';

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URI, {useNewUrlParser: true, useUnifiedTopology: true});
server.start(process.env.PORT);
