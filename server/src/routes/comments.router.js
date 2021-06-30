const { Router } = require('express');
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');
const User = require('../models/userModel');
const moment = require('moment');

const commentRouter = Router();

commentRouter.post('/add', async (req, res) => {
  try {
    let comment = await Comment.create({
      text: req.body.text,
      date: moment().subtract(6, 'days').calendar(),
      creator: req.body.autorId,
      fatherpost: req.body.postId,
    });
    const PostMain = await Post.findById({ _id: req.body.postId });

    PostMain.comments.push(comment._id);
    PostMain.save();

    res.json(comment);
  } catch (err) {
    console.error(err.message);
  }
});

commentRouter.post('/addComToCom', async (req, res) => {
  console.log(req.body);
  const creatorLogin = await User.findById({ _id: req.body.autorId });

  let comment = await Comment.create({
    text: req.body.text,
    date: moment().subtract(6, 'days').calendar(),
    creator: req.body.autorId,
    creatorLogin: creatorLogin.userName,
    fathercomment: req.body.commentId,
  });
  const MainComment = await Comment.findById({ _id: req.body.commentId });
  console.log(MainComment);

  MainComment.comments.push(comment._id);
  MainComment.save();
  res.json(comment);
});

module.exports = commentRouter;
