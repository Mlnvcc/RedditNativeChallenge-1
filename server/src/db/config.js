const mongoose = require('mongoose');
const { devDbConnectionUrl, ENVIRONMENT, dbConnectionURL } = process.env;

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

const connectionURL =
  ENVIRONMENT === 'dev' ? devDbConnectionUrl : dbConnectionURL;

module.exports = {
  connectionURL,
  options,
};
