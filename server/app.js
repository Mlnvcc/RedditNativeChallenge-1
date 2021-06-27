require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./src/db/connect');
const sessions = require('express-session');
const MongoStore = require('connect-mongo');
const { dbConnectionURL } = require('./src/db/config');
const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');
const postRouter = require('./src/routes/post.router');
const app = express();
const { PORT_NAME, TOKEN_SECRET, COOKIE_NAME } = process.env;
const jwt = require('jsonwebtoken');

const PORT = PORT_NAME;

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v2/auth', authRouter);
app.use('/post', postRouter);
app.use('/api/v2/users', usersRouter);

app.listen(PORT, () => {
  console.log('Server has been started on port', PORT);
});
