const express = require('express');
const photoController = require('../controller/photoController');

const router = express.Router();

router.route('/').post(photoController.createPhoto);
router.route('/').get(photoController.getAllPhotos);
router.route('/:id').get(photoController.getAPhoto);


module.exports = router;
