const express = require('express');
const ViewController = require('../controllers/viewController');
const AuthController = require('../controllers/authController');
const Tour = require('../models/Tour');
const User = require('../models/User');

const viewController = new ViewController(Tour);
const authController = new AuthController(User);

const router = express.Router();

// router.use(authController.isLoggedIn);

// web
router.route(`/`).get(authController.isLoggedIn, viewController.index);
router.route(`/tour/:slug`).get(authController.isLoggedIn, viewController.show);
router.route(`/tour/:slug/book`).get(authController.isLoggedIn, viewController.show);

router.route(`/login`).get(authController.isLoggedIn, viewController.login);

router.route(`/logout`).get(viewController.logout);

router
  .route(`/me`)
  .get(authController.protect, viewController.account)
  .post(authController.protect, viewController.updateAccount);

module.exports = router;
