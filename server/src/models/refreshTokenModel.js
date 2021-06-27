const { Schema, model } = require('mongoose');

const refreshTokenSchema = new Schema({
  token: { type: String, required: true },
});

const refreshToken = model('RefreshToken', refreshTokenSchema);

module.exports = refreshToken;
