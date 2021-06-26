const mongoose = require('mongoose');
const { dbConnectionURL, options } = require('./config');

function connect() {
  mongoose.connect('mongodb://localhost:27017/Yourgame', options, err => {
    if (err) console.log('Ошибка с подключением к БД!');
    console.log('Подключение к БД произошло успешно!');
  });
}

function disconnect() {
  mongoose.disconnect();
}

module.exports = { connect, disconnect };
