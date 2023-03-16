const express = require('express');
const pageController = require('../controller/pageController');

const router = express.Router();


router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/blog').get(pageController.getBlogPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/gallery').get(pageController.getGalleryPage);
router.route('/projects').get(pageController.getProjectsPage);
router.route('/services').get(pageController.getServicesPage);

module.exports = router;