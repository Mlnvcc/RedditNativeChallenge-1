const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  text: String,
  date: {
    type: String,
  },
  creatorLogin: String,
  comments: [],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  father: {},
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  fathercomment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;

// fathercomment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
