const express = require('express');
const { registerUser, loginUser } = require('../constrollers/userControllers');
const router = express.Router();

router.route('/').post(registerUser)
router.route('/login').post(loginUser)

module.exports = router;