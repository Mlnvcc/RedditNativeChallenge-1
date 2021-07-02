const mongoose = require('mongoose');
const {
  DB_HOST,
  DB_NAME,
  DB_PORT,
  devDbConnectionUrl,
  ENVIRONMENT,
  dbConnectionURL,
} = process.env;

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

// const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const connectionURL =
  ENVIRONMENT === 'dev' ? devDbConnectionUrl : dbConnectionURL;

module.exports = {
  connectionURL,
  options,
};
