const { Router } = require('express');
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');
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
  const PostMain = await Post.findById({ _id: req.body.postId });
  console.log(PostMain);
  PostMain.comments.push(comment);
  PostMain.save();

  res.json(comment);
});

module.exports = commentRouter;
