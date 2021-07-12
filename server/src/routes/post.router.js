const moment = require('moment');
const { Router } = require('express');
const postRouter = Router();
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
const checkAuth = require('../middlewares/checkAuth');

postRouter.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ _id: -1 })
      .populate('author')
      .populate({
        path: 'comments',
        populate: [
          {
            path: 'creator',
          },
          {
            path: 'comments',
          },
        ],
      });
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
      date: moment().startOf('day').fromNow(),
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
    const currPost = await Post.findById(req.body.idPost)
      .populate('author')
      .populate('comments');
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
    const currPost = await Post.findById(req.body.idPost)
      .populate('author')
      .populate('comments');
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

postRouter.patch('/likescomment', async (req, res) => {
  const { userId, commentId } = req.body;

  try {
    const currComment = await Comment.findById(commentId).populate('creator');

    if (currComment.dislikes.includes(userId)) {
      currComment.dislikes.splice(currComment.dislikes.indexOf(userId), 1);
    }
    if (!currComment.likes.includes(userId)) {
      currComment.likes.push(userId);
    } else {
      currComment.likes.splice(currComment.likes.indexOf(userId), 1);
    }
    currComment.save();

    res.json({ currComment });
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.patch('/dislikescomment', async (req, res) => {
  const { userId, commentId } = req.body;
  try {
    const currComment = await Comment.findById(commentId).populate('creator');

    if (currComment.likes.includes(userId)) {
      currComment.likes.splice(currComment.likes.indexOf(userId), 1);
    }
    if (!currComment.dislikes.includes(userId)) {
      currComment.dislikes.push(userId);
    } else {
      currComment.dislikes.splice(currComment.dislikes.indexOf(userId), 1);
    }
    currComment.save();
    res.json({ currComment });
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.patch('/edit', async (req, res) => {
  try {
    const { _id, title, description } = req.body.post;
    let updatedPost = await Post.findByIdAndUpdate(
      _id,
      {
        title,
        description,
      },
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body;
    await Post.findByIdAndDelete(id);
    res.json({ id });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = postRouter;
