const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const questionsSchema = new Schema({
  questions: String,
  answers: String,
  points: Number,
  status: { type: Boolean, default: false },
  cathegoryid: { type: mongoose.Schema.Types.ObjectId, ref: 'Cathegory' },
});

const Questions = model('Questions', questionsSchema);

module.exports = Questions;
