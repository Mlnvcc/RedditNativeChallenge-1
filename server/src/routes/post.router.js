const { Router } = require('express');
const Post = require('../models/postModel');

const checkAuth = require('../middlewares/checkAuth');
const postRouter = Router();

postRouter.get('/', async (req, res) => {
  const Posts = await Post.find();
  console.log(Posts)
  res.json({Posts})
});

// authRouter.post('/signin', authController.signIn);
// authRouter.get('/signout', authController.signOut);
// authRouter.get('/check', checkAuth, authController.checkAuth);

module.exports = postRouter;
