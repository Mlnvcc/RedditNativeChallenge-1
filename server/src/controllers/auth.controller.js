const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = process.env;

const signUp = async (req, res) => {
  const { userName, password, email } = req.body;
  console.log('BACK IS WORKING');
  console.log('111', req.body);
  console.log(typeof TOKEN_SECRET);
  if (userName && password && email) {
    try {
      const hashPassword = await bcrypt.hash(password, 11);
      const user = await User.create({
        userName,
        password: hashPassword,
        email,
      });

      // req.session.user = {
      //   id: newUser._id,
      //   name: newUser.name,
      //   email: newUser.email,
      // };
      console.log(1, user);
      // const token = jwt.sign(
      //   { id: user._id },
      //   { TOKEN_SECRET },
      //   {
      //     expressIn: '1h',
      //   }
      // );

      // console.log(2, token);

      return res.json({ id: user._id, name: user.userName, email: user.email });
    } catch (error) {
      return res.sendStatus(500);
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
        // req.session.user = {
        //   id: user._id,
        //   name: user.name,
        // };

        // const token = jwt.sign({ id: user._id }, TOKEN_SECRET, {
        //   expressIn: '1h',
        // });

        return res.json({
          id: user._id,
          name: user.userName,
          email: user.email,
        });
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy(err => {
    if (err) return res.sendStatus(500);

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
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
  signOut,
  signUp,
  checkAuth,
};
