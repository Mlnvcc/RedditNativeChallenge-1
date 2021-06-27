const { Router } = require('express');
const authController = require('../controllers/authController');

const authRouter = Router();

authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);
authRouter.post('/signout', authController.signOut);
authRouter.post('/refresh_token', authController.generateRefreshToken);
authRouter.get('/check', authController.checkAuth);

module.exports = authRouter;
