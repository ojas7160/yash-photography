const express = require('express');
const router = express.Router();
const authGuard = require('../guards/authGuard');
const usersController = require('../controllers/users/userController');

router.post('/login', usersController.userLogin);
router.post('/signup', usersController.createUser);
router.put('/updateUser/:id', usersController.updateUser)
router.get('/getProfile', usersController.getProfile)
module.exports = router;