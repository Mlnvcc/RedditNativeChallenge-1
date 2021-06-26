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
  comments: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'Comment' }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    // required: true,
  },
  date: {
    type: String,
  },
  tags: {
    type: Array,
  }
});

module.exports = mongoose.model('Post', postSchema);
