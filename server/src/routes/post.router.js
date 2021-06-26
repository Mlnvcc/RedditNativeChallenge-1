const { Router } = require('express');
const Post = require('../models/postModel');
const moment = require('moment');

const checkAuth = require('../middlewares/checkAuth');
const postRouter = Router();

postRouter.get('/', async (req, res) => {
  const Posts = await Post.find().populate('comments');
  res.json({ Posts });
});

postRouter.post('/add', async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    description: req.body.description,
    date: moment().subtract(6, 'days').calendar(),
    tags: req.body.tags,
    author: req.body.author,
  });
  res.json(post);
});

postRouter.patch('/likes', async (req, res) => {
  try {
    const currPost = await Post.findById(req.body.idPost);
    console.log(currPost);
    console.log(req.body.idPost);
    console.log(req.body.idUser);
    if (!currPost.likes.includes(req.body.idUser)) {
      currPost.likes.push(req.body.idUser);
      currPost.save();
    } else {
      currPost.likes.splice(currPost.likes.indexOf(req.body.idUser), 1);
      currPost.save();
    }
    res.json({ currPost });
  } catch (err) {
    console.error(err.message);
  }
});

// authRouter.post('/signin', authController.signIn);
// authRouter.get('/signout', authController.signOut);
// authRouter.get('/check', checkAuth, authController.checkAuth);

module.exports = postRouter;
