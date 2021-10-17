const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/user', userController.getUsers);

module.exports = router;