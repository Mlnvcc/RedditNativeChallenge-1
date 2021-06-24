require('dotenv').config();
const express = require('express');
// const { v4: useId } = require('uuid');
const cors = require('cors');
const { connect } = require('./src/db/connect');
const User = require('./src/models/userModel');
const sessions = require('express-session');
const MongoStore = require('connect-mongo');
const { dbConnectionURL } = require('./src/db/config');
const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');
const postRouter = require('./src/routes/post.router');
const Cathegory = require('./src/models/cathegoryModel');
const Questions = require('./src/models/questionsModel');

const app = express();
const { PORT_NAME, COOKIE_SECRET, COOKIE_NAME } = process.env;

const PORT = PORT_NAME;
connect();

app.set('cookieName', COOKIE_NAME);

const sessionParser = sessions({
  name: app.get('cookieName'),
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: dbConnectionURL,
  }),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400,
  },
});
app.use(cors());
app.use(sessionParser);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v2/auth', authRouter);
app.use('/post', postRouter);
app.use('/api/v2/users', usersRouter);
app.get('/games', async (req, res) => {
  const categories = await Cathegory.find();
  const questions = await Questions.find();
  return res.json({ categories, questions });
});

app.listen(PORT, () => {
  console.log('Server has been started on port', PORT);
});
