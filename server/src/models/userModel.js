const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  subscribe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const User = model('User', userSchema);

module.exports = User;
