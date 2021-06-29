const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
    },
  ],
  dislikes: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
    },
  ],
  comments: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'Comment' }],
  author: {
    type: String,
  },
  authorUsername: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: String,
  },
  dateNumber: Number,
  tags: {
    type: [],
  },
});

module.exports = mongoose.model('Post', postSchema);
