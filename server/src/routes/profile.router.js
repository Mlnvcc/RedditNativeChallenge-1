const { Router } = require('express');
const profileRouter = Router();
const User = require('../models/userModel');

profileRouter.patch('/edit', async (req, res) => {
  try {
    const { _id, userName, email } = req.body.user;
    console.log(req.body);
    let updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        userName,
        email,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = profileRouter;
