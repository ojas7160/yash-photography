const express = require('express');
const router = express.Router();
const authGuard = require('../middlewares/authGuard');
const infoController = require('../controllers/infoController/infoController');

router.post('/create', authGuard, infoController.createInfo);
router.put('/updateInfo/:id',authGuard, infoController.updateInfo);

module.exports = router;