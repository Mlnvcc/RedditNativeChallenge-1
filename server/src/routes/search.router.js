const { Router } = require('express');
const Post = require('../models/postModel');
const User = require('../models/userModel');
const checkAuth = require('../middlewares/checkAuth');

const searchRouter = Router();

searchRouter.post('/', async (req, res) => {
  const { sesrchText, searchTag } = req.body;
  switch (searchTag) {
    case "Title": {
      if (sesrchText.trim()) {
        const regex = new RegExp(sesrchText.trim(), 'i');
        const curPosts = await Post.find({ title: { $regex: regex } });
        res.json(curPosts);
      }
      else {
        res.json([]);
      }
      break;
    }

    case "Tags": {
      if (sesrchText.trim()) {
        const resCheck = sesrchText.trim().split(" ").map(el => el.toLowerCase());
        const curPosts = await Post.find({ tags: { $elemMatch: { $in: resCheck } } })
        res.json(curPosts);
      }
      else {
        res.json([]);
      }
      break;
    }

    case "Users": {
      if (sesrchText.trim()) {
        const regex = new RegExp(sesrchText.trim(), 'i');
        const curUsers = await User.find({ userName: { $regex: regex } });
        res.json(curUsers);
      }
      break;
    }

    default:
      break;
  }
})

module.exports = searchRouter;
