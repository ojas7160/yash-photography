const express = require('express');
const router = express.Router();
const authGuard = require('../middlewares/authGuard');
const fileUpload = require('../middlewares/uploadFiles');
const usersController = require('../controllers/users/userController');

router.post('/login', usersController.userLogin);
router.post('/signup', usersController.createUser);
router.put('/updateUser/:id', authGuard, fileUpload, usersController.updateUser)
router.get('/getProfile', authGuard, usersController.getProfile)
router.put('/uploadFile/:id', authGuard, fileUpload, usersController.uploadFile)
module.exports = router;