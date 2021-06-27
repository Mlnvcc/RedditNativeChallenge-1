const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = process.env;

const generateAccessToken = email =>
  jwt.sign(email, TOKEN_SECRET, {
    expiresIn: '1800s',
  });

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

      const accessToken = generateAccessToken(req.body);

      return res.json({
        auth: { accessToken },
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
        const accessToken = generateAccessToken(req.body);

        return res.json({
          auth: { accessToken },
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

const signOut = async (req, res) => {};

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
  signOut,
  signUp,
  checkAuth,
};
