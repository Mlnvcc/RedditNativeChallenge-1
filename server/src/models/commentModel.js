
const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  title: String,
  text: String,
  date: {
    type: Date,
  },
  creator:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  likes : [],
  fathercomment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  fatherpost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },


});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
