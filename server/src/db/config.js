const mongoose = require('mongoose');
const { DB_HOST, DB_NAME, DB_PORT } = process.env;

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};
console.log('HOST', DB_HOST);
const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

module.exports = {
  dbConnectionURL,
  options,
};
