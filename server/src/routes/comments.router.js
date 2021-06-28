const { Router } = require('express');
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');
const User = require('../models/userModel');
const moment = require('moment');

const commentRouter = Router();

commentRouter.post('/add', async (req, res) => {
  console.log(234, req.body);
  const comment = await Comment.create({
    text: req.body.text,
    date: moment().subtract(6, 'days').calendar(),
    creator: req.body.autorId,
    fatherpost: req.body.postId,
  });
  console.log(req.body.postId);
  const PostMain = await Post.findById({ _id: req.body.postId });
  console.log(PostMain);
  PostMain.comments.push(comment);
  PostMain.save();

  res.json(comment);
});

commentRouter.post('/addComToCom', async (req, res) => {
  console.log('asdasdadasdads', req.body);
  const creatorLogin = await User.findById({ _id: req.body.autorId });
  console.log('creatorLogin', creatorLogin);

  const comment = await Comment.create({
    text: req.body.text,
    date: moment().subtract(6, 'days').calendar(),
    creator: req.body.autorId,
    creatorLogin: creatorLogin.userName,
    fathercomment: req.body.commentId,
  });
  console.log(comment);
  const MainComment = await Comment.findById({ _id: req.body.commentId });

  MainComment.comments.push(comment);
  MainComment.save();
  res.json(comment);
});
module.exports = commentRouter;
