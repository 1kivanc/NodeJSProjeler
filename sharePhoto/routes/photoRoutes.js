const express = require('express');
const photoController = require('../controller/photoController');

const router = express.Router();

router.route('/').post(photoController.createPhoto);


module.exports = router;
