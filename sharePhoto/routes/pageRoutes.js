const express = require('express');
const pageController = require('../controller/pageController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.route('/').get(authMiddleware.authenticateToken ,pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/blog').get(pageController.getBlogPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/projects').get(pageController.getProjectsPage);
router.route('/services').get(pageController.getServicesPage);
router.route('/register').get(pageController.getRegisterPage);
router.route('/login').get(pageController.getLoginPage);

module.exports = router;