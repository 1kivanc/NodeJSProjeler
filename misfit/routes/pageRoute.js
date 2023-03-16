const express = require('express');
const pageController = require('../controller/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/gallery').get(pageController.getGalleryPage);
router.route('/news').get(pageController.getNewsPage);
router.route('/service').get(pageController.getServicePage);
router.route('/trainer').get(pageController.getTrainerPage);
router.route('/login').get(pageController.getLoginPage);
router.route('/uploadphoto').get(pageController.getUploadPage);


module.exports = router;

