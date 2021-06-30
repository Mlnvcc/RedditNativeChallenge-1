const { Router } = require('express');
const usersController = require('../controllers/usersController');
const checkAuth = require('../middlewares/checkAuth');
const User = require('../models/userModel');

const usersRouter = Router();

usersRouter.get('/', checkAuth, usersController.getAllUsers);
usersRouter
  .route('/:id')
  .patch(checkAuth, usersController.editUser)
  .get(checkAuth, usersController.getUser);

usersRouter.post('/subscribe', async (req, res) => {
  console.log(req.body);
  const author = await User.findById({ _id: req.body.autorId });
  console.log('author', author);
  const user = await User.findById({ _id: req.body.userId });
  console.log('user', user);
  author.subscribers.push(user._id);
  author.save();
  res.json({ asdads: 'Asdads' });
});
usersRouter.post('/subdisscribe', async (req, res) => {
  console.log('qqqqqqqq');
  const author = await User.findById({ _id: req.body.autorId });
  console.log('author', author);
  // const user = await User.findById({ _id: req.body.userId });
  // console.log('user', user);
   const arr = author.subscribers.filter(el => el != req.body.userId);
   author.subscribers = arr
  console.log(author.subscribers.length);
  author.save();
  res.json({ asdads: 'Asdads' });
});
module.exports = usersRouter;
