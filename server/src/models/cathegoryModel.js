const { Schema, model } = require('mongoose');

const cathegorySchema = new Schema({
  title: String,
});

const Cathegory = model('Cathegory', cathegorySchema);

module.exports = Cathegory;
