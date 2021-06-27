const { Router } = require('express');
const usersController = require('../controllers/usersController');
const checkAuth = require('../middlewares/checkAuth');

const usersRouter = Router();

usersRouter.get('/', checkAuth, usersController.getAllUsers);
usersRouter
  .route('/:id')
  .patch(checkAuth, usersController.editUser)
  .get(checkAuth, usersController.getUser);

module.exports = usersRouter;
