'use strict';

const app           = require('./server/app');
const serverless    = require('serverless-http')

module.exports.handler = serverless(app);