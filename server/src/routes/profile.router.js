const { Router } = require('express');
const profileRouter = Router();
const User = require('../models/userModel');

profileRouter.patch('/edit', async (req, res) => {
  try {
    const { _id, userName, email } = req.body.user;
    let updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        userName,
        email,
        uri: req.body.user.uri,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = profileRouter;
