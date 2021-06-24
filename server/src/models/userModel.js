const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, min: 6 },
});

const User = model('User', userSchema);

module.exports = User;
