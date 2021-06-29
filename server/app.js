require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./src/db/connect');
const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');
const postRouter = require('./src/routes/post.router');
const commentRouter = require('./src/routes/comments.router');
const profileRouter = require('./src/routes/profile.router')
const app = express();
const { PORT_NAME } = process.env;

const PORT = PORT_NAME;

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v2/auth', authRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/api/v2/users', usersRouter);
app.use('/profile', profileRouter)

app.listen(PORT, () => {
  console.log('Server has been started on port', PORT);
});
