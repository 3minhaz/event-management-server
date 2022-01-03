const express = require('express');
const { createPackage, getPackages } = require('../constrollers/packageControllers');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/packages').get(protect,getPackages);
router.route('/create').post(protect,createPackage);
module.exports = router;