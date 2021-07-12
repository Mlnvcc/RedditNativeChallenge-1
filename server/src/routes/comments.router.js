const { Router } = require('express');
const moment = require('moment');
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');
const User = require('../models/userModel');

const commentRouter = Router();

commentRouter.post('/add', async (req, res) => {
  try {
    const father = await Post.findById(req.body.postId);

    const comment = await Comment.create({
      text: req.body.text,
      date: moment().subtract(6, 'days').calendar(),
      creator: req.body.autorId,
      father,
    });

    const PostMain = await Post.findById({ _id: req.body.postId });

    PostMain.comments.push(comment._id);
    PostMain.save();

    const commentToFront = await Comment.findById(comment._id).populate(
      'creator'
    );

    res.json(commentToFront);
  } catch (err) {
    console.error(err.message);
  }
});

commentRouter.post('/addComToCom', async (req, res) => {
  const creator = await User.findById(req.body.autorId);

  const сomment = await Comment.findById(req.body.fathercomment);

  const reply = await Comment.create({
    text: req.body.text,
    date: moment().subtract(6, 'days').calendar(),
    creator: req.body.autorId,
    creatorLogin: creator.userName,
    postId: req.body.postId,
    father: сomment,
  });

  сomment.comments.push(reply._id);
  сomment.save();

  res.json(reply);
});

module.exports = commentRouter;
