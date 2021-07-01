const { Router } = require('express');
const Comment = require('../models/commentModel');
const Reply = require('../models/replyModel');
const Post = require('../models/postModel');
const User = require('../models/userModel');
const moment = require('moment');

const commentRouter = Router();

commentRouter.post('/add', async (req, res) => {
  // console.log('comment', req.body);
  try {
    const father = await Post.findById(req.body.postId);
    console.log(123123, father);
    let comment = await Comment.create({
      text: req.body.text,
      date: moment().subtract(6, 'days').calendar(),
      creator: req.body.autorId,
      father,
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
  console.log(123123, req.body);
  const creatorLogin = await User.findById(req.body.autorId);
  // console.log('ADDCOMTOCOM', req.body);
  const allComment = await Comment.find();
  // console.log(123, allComment);
  const father = allComment.filter(
    comment => comment._id == req.body.fathercomment
  );
  // console.log('BATYA', father);
  const comment = await Comment.create({
    text: req.body.text,
    date: moment().subtract(6, 'days').calendar(),
    creator: req.body.autorId,
    creatorLogin: creatorLogin.userName,
    postId: req.body.postId,
    father: father[0],
  });
  const MainComment = await Comment.findById(req.body.fathercomment);

  MainComment.comments.push(comment);
  MainComment.save();
  res.json(comment);
});

module.exports = commentRouter;
