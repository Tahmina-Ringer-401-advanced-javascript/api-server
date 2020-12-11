'use strict';

function errorHandler(err, req, res, next) {
  res.status(500).send(`${err.message} server error`);
}

module.exports = errorHandler;