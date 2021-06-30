const { Router } = require('express');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
const moment = require('moment');
const checkAuth = require('../middlewares/checkAuth');
const postRouter = Router();

postRouter.get('/', checkAuth, async (req, res) => {
  try {
    const posts = await Post.find().populate('comments').populate('author');
    // .populate({
    //   path : 'userId',
    //   populate : {
    //     path : 'reviewId'
    //   }
    // })
    // console.log('GET posts', posts);
    // const comments = await Comment.find()
    //   .populate('comments')
    //   .populate('author');
    // res.json({ posts, comments });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.post('/add', checkAuth, async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      date: moment().subtract(6, 'days').calendar(),
      dateNumber: Date.now(),
      tags: req.body.tags,
      author: req.body.author,
      authorUsername: req.body.authorUsername,
      uri: req.body.uri,
    });
    res.json(post);
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.patch('/likes', async (req, res) => {
  try {
    const currPost = await Post.findById(req.body.idPost).populate("author").populate("comments");
    if (currPost.dislikes.includes(req.body.idUser)) {
      currPost.dislikes.splice(currPost.dislikes.indexOf(req.body.idUser), 1);
    }
    if (!currPost.likes.includes(req.body.idUser)) {
      currPost.likes.push(req.body.idUser);
    } else {
      currPost.likes.splice(currPost.likes.indexOf(req.body.idUser), 1);
    }
    currPost.save();
    res.json({ currPost });
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.patch('/dislikes', async (req, res) => {
  try {
    const currPost = await Post.findById(req.body.idPost).populate("author").populate("comments");
    if (currPost.likes.includes(req.body.idUser)) {
      currPost.likes.splice(currPost.likes.indexOf(req.body.idUser), 1);
    }
    if (!currPost.dislikes.includes(req.body.idUser)) {
      currPost.dislikes.push(req.body.idUser);
    } else {
      currPost.dislikes.splice(currPost.dislikes.indexOf(req.body.idUser), 1);
    }
    currPost.save();
    res.json({ currPost });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = postRouter;
