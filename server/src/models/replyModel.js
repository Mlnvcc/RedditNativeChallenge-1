const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const replySchema = new Schema({
  text: String,
  date: {
    type: String,
  },
  creatorLogin: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

  fatherpost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});

const Reply = model('Reply', replySchema);

module.exports = Reply;

// fathercomment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
