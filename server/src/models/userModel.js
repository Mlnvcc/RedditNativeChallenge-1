const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
  userName: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  subscribe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const User = model('User', userSchema);

module.exports = User;
