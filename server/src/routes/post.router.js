const { Router } = require('express');
const Post = require('../models/postModel');
const moment = require('moment');
const checkAuth = require('../middlewares/checkAuth');
const postRouter = Router();

postRouter.get('/', checkAuth, async (req, res) => {
  try{
    const Posts = await Post.find().populate('comments');
  
    res.json({ Posts });
  }catch (err) {
    console.error(err.message);
  }
});

postRouter.post('/add', checkAuth, async (req, res) => {
  try{
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      date: moment().subtract(6, 'days').calendar(),
      tags: req.body.tags,
      author: req.body.author,
    });
    res.json(post);
  }catch (err) {
    console.error(err.message);
  }
});

postRouter.patch('/likes', async (req, res) => {
  try {
    const currPost = await Post.findById(req.body.idPost);
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
