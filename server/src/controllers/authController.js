const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const RefreshToken = require('../models/refreshTokenModel');
const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const signUp = async (req, res) => {
  const { userName, password, email } = req.body;

  if (userName && password && email) {
    try {
      const hashPassword = await bcrypt.hash(password, 11);
      const user = await User.create({
        userName,
        password: hashPassword,
        email,
      });

      const accessToken = user.createAccessToken();
      const refreshToken = await user.createRefreshToken();

      return res.json({
        auth: { accessToken, refreshToken },
        userInfo: { id: user._id, email: user.email, userName: user.userName },
      });
    } catch (error) {
      return res.sendStatus(401);
    }
  }

  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  const { password, email } = req.body;

  if (password && email) {
    try {
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = user.createAccessToken();
        const refreshToken = await user.createRefreshToken();

        return res.json({
          auth: { accessToken, refreshToken },
          userInfo: {
            id: user._id,
            email: user.email,
            userName: user.userName,
          },
        });
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const generateRefreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.sendStatus(403).json({ error: 'Invalid token' });
    } else {
      const dbToken = await RefreshToken.findOne({ token: refreshToken });

      if (!dbToken) {
        res.sendStatus(401).json({ error: 'Token expired' });
      } else {
        const payload = jwt.verify(dbToken.token, REFRESH_TOKEN_SECRET);

        const newAccessToken = jwt.sign(
          { user: payload },
          ACCESS_TOKEN_SECRET,
          {
            expiresIn: '24h',
          }
        );
        // console.log(111, { accessToken: newAccessToken });
        return res.json({ accessToken: newAccessToken });
      }
    }
  } catch (error) {
    return res.sendStatus(500);
  }
};

const signOut = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    await RefreshToken.findOneAndDelete({ token: refreshToken });
    return res.status(200).json({ success: 'User logged out!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error!' });
  }
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id, { password: 0 });
    return res.json(user);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signUp,
  checkAuth,
  generateRefreshToken,
  signOut,
};
