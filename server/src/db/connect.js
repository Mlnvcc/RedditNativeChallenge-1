const mongoose = require('mongoose');
const { connectionURL, options } = require('./config');

function connect() {
  mongoose.connect(connectionURL, options, err => {
    if (err) console.log('Ошибка с подключением к БД!');
    console.log('Подключение к БД произошло успешно!');
  });
}

function disconnect() {
  mongoose.disconnect();
}

module.exports = { connect, disconnect };
