const express = require('express');
const router = express.Router();
const authGuard = require('../guards/authGuard');
const infoController = require('../controllers/infoController/infoController');

router.post('/create', authGuard, infoController.createInfo);
router.post('/updateInfo/:id',authGuard, infoController.updateInfo);

module.exports = router;