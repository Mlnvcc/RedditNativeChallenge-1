const { Router } = require('express');
const Post = require('../models/postModel');
const moment = require('moment');

const checkAuth = require('../middlewares/checkAuth');
const postRouter = Router();

postRouter.get('/', async (req, res) => {
  const Posts = await Post.find().populate("comments");
  // console.log(123, Posts);
  res.json({ Posts });
});
postRouter.post('/add', async (req, res) => {
  // console.log(234, req.body);
  const post = await Post.create({
    title: req.body.title,
    description: req.body.description,
    date: moment().subtract(6, 'days').calendar(),
    tags: req.body.tags,
    author: req.body.author,
  });

  res.json(post);
});

// authRouter.post('/signin', authController.signIn);
// authRouter.get('/signout', authController.signOut);
// authRouter.get('/check', checkAuth, authController.checkAuth);

module.exports = postRouter;
