const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  text: String,
  date: {
    type: String,
  },
  creatorLogin: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId }],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  likes: [],

  fathercomment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  fatherpost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
