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

// const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const dbConnectionURL = process.env.dbConnectionURL

module.exports = {
  dbConnectionURL,
  options,
};
