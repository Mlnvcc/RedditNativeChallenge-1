const { Router } = require('express');
const Post = require('../models/postModel');
const moment = require('moment');
const checkAuth = require('../middlewares/checkAuth');
const postRouter = Router();

postRouter.get('/', checkAuth, async (req, res) => {
  const Posts = await Post.find();

  res.json({ Posts });
});
postRouter.post('/add', checkAuth, async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    description: req.body.description,
    date: moment().subtract(6, 'days').calendar(),
  });

  res.json(post);
});

module.exports = postRouter;
