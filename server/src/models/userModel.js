const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const RefreshToken = require('./refreshTokenModel');

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subscribe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

userSchema.methods = {
  createAccessToken: () => {
    try {
      const { _id, userName, email } = this;
      const accessToken = jwt.sign(
        { user: { _id, userName, email } },
        ACCESS_TOKEN_SECRET,
        {
          expiresIn: '24h',
        }
      );
      return accessToken;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  createRefreshToken: async () => {
    try {
      const { _id, userName, email } = this;
      const refreshToken = jwt.sign(
        { user: { _id, userName, email } },
        REFRESH_TOKEN_SECRET,
        {
          expiresIn: '72h',
        }
      );

      await new RefreshToken({ token: refreshToken }).save();
      return refreshToken;
    } catch (error) {
      console.error(error);
      return;
    }
  },
};

const User = model('User', userSchema);

module.exports = User;
